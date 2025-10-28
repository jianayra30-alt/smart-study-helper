document.getElementById("askBtn").addEventListener("click", async () => {
  const question = document.getElementById("question").value.trim();
  const answerDiv = document.getElementById("answer");

  if (!question) {
    answerDiv.innerHTML = "Tolong tulis pertanyaannya dulu ya 😊";
    return;
  }

  answerDiv.innerHTML = "⏳ Sedang memproses jawaban...";
}
                                                   { 
  const apiKey = "jia-openai-key";
}
document.getElementById("askBtn").addEventListener("click", async () => {
  const question = document.getElementById("question").value.trim();
  const answerDiv = document.getElementById("answer");

  if (!question) {
    answerDiv.innerHTML = "Tolong tulis pertanyaannya dulu ya 😊";
    return;
  }

  answerDiv.innerHTML = "⏳ Sedang memproses jawaban...";

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: question }],
      })
    });

    const data = await response.json();
    answerDiv.innerHTML = `🤖 Jawaban AI:<br><br>${data.choices[0].message.content}`;
  } catch (error) {
    answerDiv.innerHTML = "⚠️ Gagal mengambil jawaban. Coba lagi nanti ya!";
  }
});
