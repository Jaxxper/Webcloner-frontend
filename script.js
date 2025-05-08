async function cloneVoice() {
  const text = document.getElementById("text").value;

  const res = await fetch("https://webcloner.onrender.com/api/clone", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      voiceId: "s3://voice-cloning-zero-shot/edward.wav",
      text: text
    })
  });

  const data = await res.json();
  const audio = document.getElementById("audio");
  audio.src = data.url;
  audio.style.display = "block";
}