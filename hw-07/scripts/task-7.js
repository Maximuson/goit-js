const inputRange = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
text.style.fontSize = '16px';
const changeFontSize = () => {
  const fontSize = 16;
  const textZoom = ((inputRange.value / 100) * 2);
  text.style.fontSize = (`${fontSize * textZoom}px`);
};
inputRange.addEventListener('input', changeFontSize);

//if IE10
inputRange.addEventListener('change', changeFontSize);
