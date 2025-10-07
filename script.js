/* 
  WhatsApp direto — Protege TODOS Afiliados
  ✅ Número configurado: 11971141004
  Formato internacional (Brasil): 5511971141004
*/

const WHATSAPP_NUMBER = "5511971141004"; // número atualizado

// Mensagem padrão — pode alterar se quiser.
const DEFAULT_MESSAGE = "Olá! Tenho interesse em me tornar um Afiliado Protege TODOS. Pode me explicar como funciona?";

// Elementos
const btn = document.getElementById("wa-open");
const floatBtn = document.getElementById("wa-float");
const prefillInput = document.getElementById("prefill");

/**
 * buildWhatsAppLink(message)
 * - monta o link oficial sem usar API (somente wa.me)
 */
function buildWhatsAppLink(message) {
  const text = encodeURIComponent((message || DEFAULT_MESSAGE).trim());
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

/**
 * openWhatsApp(message)
 * - abre o WhatsApp em nova aba (ou app móvel)
 */
function openWhatsApp(message) {
  const url = buildWhatsAppLink(message);
  window.open(url, "_blank", "noopener,noreferrer");
}

/* Eventos de clique */
btn.addEventListener("click", () => {
  const msg = prefillInput.value || DEFAULT_MESSAGE;
  openWhatsApp(msg);
});

floatBtn.addEventListener("click", () => {
  openWhatsApp(DEFAULT_MESSAGE);
});

/* Enter no campo = enviar */
prefillInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    btn.click();
  }
});
