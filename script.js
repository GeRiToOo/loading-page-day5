const loadingText = document.querySelector('.loading-text');
const background = document.querySelector('.bg');

let load = 0;

const countOpacityAndBlur = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const blurring = () => {
  load++;
  if (load > 99) {
    clearInterval(int);
  }

  loadingText.innerHTML = `${load}%`;
  loadingText.style.opacity = countOpacityAndBlur(load, 0, 100, 1, 0);
  background.style.filter = `blur(${countOpacityAndBlur(
    load,
    0,
    100,
    30,
    0
  )}px)`;
};

let int = setInterval(blurring, 50);
