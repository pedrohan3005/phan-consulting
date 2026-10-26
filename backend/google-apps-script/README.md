# Recebimento de leads no Google Sheets

Este Apps Script grava os envios em uma aba `Leads` da planilha vinculada. Ele
tambem registra UTMs e o identificador de clique do Google Ads quando presentes
na URL da pagina.

## Configuracao

1. Crie uma planilha no Google Sheets e mantenha o acesso restrito a equipe.
2. Na planilha, abra **Extensoes > Apps Script**.
3. Substitua o conteudo de `Code.gs` pelo arquivo deste diretorio e salve.
4. Clique em **Implantar > Nova implantacao** e escolha **App da Web**.
5. Configure **Executar como: eu** e **Quem pode acessar: qualquer pessoa**.
6. Implante, autorize o acesso solicitado e copie a URL terminada em `/exec`.
7. Configure essa URL como `LEAD_ENDPOINT` no JavaScript de `agendamento.html`.

O endpoint e publico para permitir envios pelo GitHub Pages. A planilha deve
continuar privada. O script valida campos obrigatorios, exige consentimento,
usa um campo honeypot e limita reenvios do mesmo e-mail por 60 segundos.

Antes de coletar leads reais, publique uma politica de privacidade e informe
quem controla os dados, a finalidade, o prazo de retencao e como solicitar
acesso ou exclusao. O checkbox do formulario registra autorizacao para contato;
ele nao substitui uma politica de privacidade.

Como o endpoint e publico, monitore o uso e as quotas do Apps Script. Para
campanhas com mais volume, adicione CAPTCHA e limite de requisicoes antes de
investir em trafego pago.