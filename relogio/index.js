function atualizarRelogio() {
  const data = new Date();
  const hora = data.getHours();
  const minuto = data.getMinutes();
  const segundo = data.getSeconds();

  // Atualiza relógio digital
  document.getElementById("digital").innerText =
    hora + ":" + minuto + ":" + segundo;

  // Atualiza relógio analógico
  const grauHora = (hora % 12) * 30 + minuto * 0.5;
  const grauMinuto = minuto * 6;
  const grauSegundo = segundo * 6;

  document.getElementById("hora").style.transform = `rotate(${grauHora}deg)`;
  document.getElementById(
    "minuto"
  ).style.transform = `rotate(${grauMinuto}deg)`;
  document.getElementById(
    "segundo"
  ).style.transform = `rotate(${grauSegundo}deg)`;
}

// Atualiza a cada segundo
setInterval(atualizarRelogio, 1000);

// Chama a função inicialmente para evitar atrasos
atualizarRelogio();
