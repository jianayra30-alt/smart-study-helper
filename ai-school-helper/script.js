document.getElementById("askBtn").addEventListener("click", async () => {
  const q = document.getElementById("question").value.trim();
  const a = document.getElementById("answer");

  if (!q) {
    a.innerHTML = "tolong tulis pertanyaannya dulu ya 😊";
    return;
  }

  a.innerHTML = "⏳ sedang memproses...";

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: q })
    });
    const data = await res.json();
    a.innerHTML = `🤖 jawaban:<br><br>${data.reply}`;
  } catch (err) {
    console.error(err);
    a.innerHTML = "⚠️ gagal mengambil jawaban";
  }
});
