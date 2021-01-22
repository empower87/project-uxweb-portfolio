let nav = document.querySelector('nav')
console.log(nav.style.background.valueOf)

document.querySelector('#menuToggle input').oninput = function() {
  if (nav == "rgba(0, 0, 0, 0)") {
    nav.style.background = "#00000096"
    console.log(nav)
  }
}