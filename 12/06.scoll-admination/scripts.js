const boxs = document.querySelectorAll(".box");

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4
  console.log(triggerBottom)

  boxs.forEach(boxs => {
    const boxTop = boxs.getBoundingClientRect().top;
    console.log(boxTop)
    if (boxTop < triggerBottom) {
      boxs.classList.add('show')
    } else {
      boxs.classList.remove('show')
    }
  })
}
