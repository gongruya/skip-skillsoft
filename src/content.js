const btn = document.createElement('button');
btn.textContent = 'Skip Video';
btn.style.zIndex = 100000;
btn.style.backgroundColor = '#fff';
btn.style.position = 'absolute';
btn.style.top = '50%';
btn.style.left = '50%';
btn.style.fontSize = "30px";
btn.style.cursor = "pointer";

document.body.appendChild(btn);

function maybeSkipMedia() {
  const mediaList = document.querySelectorAll('video,audio');
  for (const media of mediaList) {
    if (media && Number.isFinite(media.duration)) {
      media.currentTime = media.duration;
    }
  }
}

btn.addEventListener('click', () => {
  maybeSkipMedia();
});
document.addEventListener("keypress", (e) => {
  if (e.key === 's') {
    maybeSkipMedia();
  }
});
