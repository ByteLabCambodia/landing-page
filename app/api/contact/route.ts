const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzdnpjyb";

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export async function POST(request: Request) {
  const data = await request.formData();
  const name = String(data.get("name") ?? "");
  const email = String(data.get("email") ?? "");
  const message = String(data.get("message") ?? "");

  const results = await Promise.allSettled([
    fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    }),
    sendTelegramNotification(name, email, message),
  ]);

  const anyOk = results.some((r) => r.status === "fulfilled" && r.value);
  return Response.json({ ok: anyOk }, { status: anyOk ? 200 : 502 });
}

async function sendTelegramNotification(name: string, email: string, message: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return false;

  const receivedAt = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Phnom_Penh",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const text =
    `🤖 <b>New ByteLab inquiry</b>\n` +
    `━━━━━━━━━━━━━━━\n` +
    `👤 <b>Name:</b> ${escapeHtml(name)}\n` +
    `✉️ <b>Email:</b> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>\n` +
    `🕒 <b>Received:</b> ${escapeHtml(receivedAt)} (Phnom Penh)\n\n` +
    `💬 <b>Message</b>\n` +
    `<blockquote>${escapeHtml(message)}</blockquote>`;

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
  });
  return res.ok;
}
