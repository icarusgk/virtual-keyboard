
const keys = [];
document.querySelectorAll('kbd').forEach(key => keys.push(key.innerText));

document.addEventListener('keydown', e => {
  if (keys.includes(e.key.toUpperCase())) {
    let audio = new Audio(`keys/${e.key.toUpperCase()}.mp3`);
    audio.load();
    audio.play();
  } else {
    console.log(`Pressed: ${e.key}. Enter a valid key`);
  }
});
