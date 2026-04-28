/* Optional UI sounds. The game stays silent if Web Audio is unavailable. */
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;

function playBleep(freq = 440, dur = 0.04) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "square";
    osc.frequency.value = freq;
    gain.gain.value = 0.05;
    osc.connect(gain).connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + dur);
  } catch (e) {
    /* Silent fallback. */
  }
}

function playLevelUp() {
  [523, 659, 784, 1047].forEach((freq, index) => {
    setTimeout(() => playBleep(freq, 0.08), index * 80);
  });
}

window.FINERD_AUDIO = {
  playBleep,
  playLevelUp
};
