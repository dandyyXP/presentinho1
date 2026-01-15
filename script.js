const mensagens = [
    "eu amo seu sorriso ✨",
    "amo seus olhos perto dos meus 🙃",
    "você é minha pessoa favorita  🤍",
    "adoro quando você me abraça 💕",
    "sentir seu cheiro de perto me dá paz 🌸",
    "penso em você o dia todo 🗯️",
    "eu anseio pelo o teu beijo 💋",
    "meu sonho é que você fique comigo para sempre 🌟",
    "gosto mais de mim quando estou com você 😁",
    "quero ser a minha melhor versão para você 🤠",
    "o mundo com você fica mais colorido 🌈",
    "eu te quero tanto 💗",
    "você é meu lar favorito 🏡",
    "eu amo você ❣️"

];

let i = 0;

function mostrarMensagem() {
  const texto = 
document.getElementById("texto");

  texto.style.animation = "none";
  texto.offsetHeight; // reset animation
  texto.style.animation = "fadeIn 0.6s forwards";

  texto.innerText = mensagens[i];
  i = (i + 1) % mensagens.length;
  
}