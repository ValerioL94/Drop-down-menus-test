const menu = (() => {
  function addListeners() {
    const leftBtn = document.getElementById('leftBtn');
    const rightBtn = document.getElementById('rightBtn');
    const slideBar = document.getElementById('slideBar');
    const dropBar = document.getElementById('dropBar');

    leftBtn.addEventListener('click', () => {
      slideBar.classList.toggle('slide');
      leftBtn.classList.toggle('clicked');
    });

    rightBtn.addEventListener('click', () => {
      dropBar.classList.toggle('drop');
      rightBtn.classList.toggle('clicked');
    });
  }
  return {
    addListeners,
  };
})();

export default menu;
