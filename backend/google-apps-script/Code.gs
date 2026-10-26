var HEADERS = [
  "Recebido em",
  "Nome",
  "E-mail",
  "WhatsApp",
  "Empresa e cargo",
  "Área de interesse",
  "Faturamento / equipe",
  "Desafio principal",
  "Consentimento",
  "Página de origem",
  "UTM source",
  "UTM medium",
  "UTM campaign",
  "UTM term",
  "UTM content",
  "Google click ID",
];

function myFunction() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  if (!spreadsheet) {
    throw new Error("Abra o Apps Script a partir da planilha que recebera os leads.");
  }

  var sheet = spreadsheet.getSheetByName("Leads") || spreadsheet.insertSheet("Leads");
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }
  sheet.setFrozenRows(1);
}

function doPost(event) {
  var data = event && event.parameter ? event.parameter : {};
  var requestToken = cleanText(data.request_token, 100);

  if (String(data.website || "").trim()) {
    return htmlResponse(true, requestToken);
  }

  var lead = {
    name: cleanText(data.name, 120),
    email: cleanText(data.email, 254).toLowerCase(),
    phone: cleanText(data.phone, 40),
    company: cleanText(data.company, 160),
    interest: cleanText(data.interest, 60),
    revenue: cleanText(data.revenue, 60),
    challenge: cleanText(data.challenge, 2000),
    consent: data.consent === "true",
    pageUrl: cleanText(data.page_url, 1000),
    utmSource: cleanText(data.utm_source, 200),
    utmMedium: cleanText(data.utm_medium, 200),
    utmCampaign: cleanText(data.utm_campaign, 200),
    utmTerm: cleanText(data.utm_term, 200),
    utmContent: cleanText(data.utm_content, 200),
    gclid: cleanText(data.gclid, 500),
  };

  if (!lead.name || !lead.email || !lead.phone || !lead.company || !lead.interest || !lead.consent) {
    return htmlResponse(false, requestToken, "invalid_submission");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return htmlResponse(false, requestToken, "invalid_email");
  }

  if (!/^[a-f0-9-]{32,100}$/i.test(requestToken)) {
    return htmlResponse(false, "", "invalid_request");
  }

  var lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    var cache = CacheService.getScriptCache();
    var digest = Utilities.computeDigest(
      Utilities.DigestAlgorithm.SHA_256,
      lead.email
    );
    var cacheKey = "lead:" + Utilities.base64EncodeWebSafe(digest);

    if (cache.get(cacheKey)) {
      return htmlResponse(false, requestToken, "duplicate_submission");
    }

    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName("Leads") || spreadsheet.insertSheet("Leads");

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
    }

    sheet.appendRow([
      new Date(),
      safeCell(lead.name),
      safeCell(lead.email),
      safeCell(lead.phone),
      safeCell(lead.company),
      safeCell(lead.interest),
      safeCell(lead.revenue),
      safeCell(lead.challenge),
      lead.consent,
      safeCell(lead.pageUrl),
      safeCell(lead.utmSource),
      safeCell(lead.utmMedium),
      safeCell(lead.utmCampaign),
      safeCell(lead.utmTerm),
      safeCell(lead.utmContent),
      safeCell(lead.gclid),
    ]);

    SpreadsheetApp.flush();
    cache.put(cacheKey, "1", 60);
    return htmlResponse(true, requestToken);
  } catch (error) {
    console.error("Lead could not be saved: " + error.message);
    return htmlResponse(false, requestToken, "save_failed");
  } finally {
    lock.releaseLock();
  }
}

function cleanText(value, maxLength) {
  return String(value || "").trim().slice(0, maxLength);
}

function safeCell(value) {
  var text = String(value || "");
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function htmlResponse(ok, requestToken, error) {
  var message = JSON.stringify({
    type: "phan-lead-response",
    token: requestToken,
    ok: ok,
    error: error || "",
  });

  return HtmlService
    .createHtmlOutput("<script>window.top.postMessage(" + message + ", '*');</script>")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}