(() => {
  const baseUrl = 'https://pedrohan3005.github.io/phan-consulting/';
  const destinations = {
    commercial: `${baseUrl}phan_assessoria_consultoria_comercial/code.html`,
    operations: `${baseUrl}phan_consultoria_de_gest_o_opera_es/code.html`,
    dashboards: `${baseUrl}phan_an_lise_de_dados_cria_o_de_dashboards/code.html`,
    booking: `${baseUrl}agendamento.html#diagnostico`,
  };

  function normalizeLabel(value) {
    return (value || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();
  }

  document.querySelectorAll('a[href]').forEach((link) => {
    const label = normalizeLabel(`${link.getAttribute('aria-label') || ''} ${link.textContent || ''}`);

    if (/\b(agendar|solicitar)\b.*\bdiagnostico\b/.test(label) || /^diagnostico(?: inicial)?$/.test(label) || label.includes('sessao estrategica')) {
      link.href = destinations.booking;
    } else if (label.includes('consultoria comercial') || label.includes('assessoria comercial') || label.includes('funil')) {
      link.href = destinations.commercial;
    } else if (label.includes('gestao') || label.includes('operacoes') || label.includes('processos operacionais')) {
      link.href = destinations.operations;
    } else if (label.includes('dashboard') || label.includes('power bi') || label.includes('inteligencia de dados')) {
      link.href = destinations.dashboards;
    }
  });
})();
