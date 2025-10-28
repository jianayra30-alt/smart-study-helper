const apiKey = "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"; 

document.getElementById("askBtn").addEventListener("click", async () => {
  const question = document.getElementById("question").value.trim();
  const answerDiv = document.getElementById("answer");

  if (!question) {
    answerDiv.innerHTML = "tolong tulis pertanyaannya dulu ya 😊";
    return;
  }

  answerDiv.innerHTML = "⏳ sedang memproses jawaban...";

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

    if (data.choices && data.choices.length > 0) {
      answerDiv.innerHTML = `🤖 jawaban ai:<br><br>${data.choices[0].message.content}`;
    } else {
      answerDiv.innerHTML = "⚠️ tidak ada jawaban yang diterima, coba lagi ya!";
    }

  } catch (error) {
    console.error(error);
    answerDiv.innerHTML = "⚠️ gagal mengambil jawaban. coba lagi nanti ya!";
  }
});
