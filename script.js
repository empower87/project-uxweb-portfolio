let nav = document.querySelector('nav')
console.log(nav.style.background)

document.querySelector('#menuToggle input').oninput = function () {
  if (nav == "rgba(0, 0, 0, 0)") {
    nav.style.background = "#00000096"
    console.log(nav)
  }
}

let previousY;
let page = 0; 
document.querySelectorAll('.slide-wrap a').forEach(link => {

  link.onclick = function (e) {

    document.querySelectorAll('.slide-wrap a').forEach(link => {
      link.classList.remove('page')
    })

    previousY = window.scrollY
  
    this.classList.add('page')

  setTimeout(function(){
    window.scrollTo(0, previousY)
  }, 0)
  }
})

console.log("page loaded")