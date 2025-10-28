document.getElementById("askBtn").addEventListener("click", async () => {
  const question = document.getElementById("question").value.trim();
  const answerDiv = document.getElementById("answer");

  if (!question) {
    answerDiv.innerHTML = "Tolong tulis pertanyaannya dulu ya 😊";
    return;
  }

  answerDiv.innerHTML = "⏳ Sedang memproses jawaban...";

  // Simulasi respon AI (tanpa API asli)
  setTimeout(() => {
    answerDiv.innerHTML = `🤖 Jawaban AI: <br><br> ${
      question.includes("Pythagoras")
        ? "Teorema Pythagoras menyatakan bahwa kuadrat sisi miring sama dengan jumlah kuadrat dua sisi lainnya."
        : "Hmm... sepertinya aku belum tahu, tapi aku akan terus belajar seperti kamu! 💪"
    }`;
  }, 1500);
});
