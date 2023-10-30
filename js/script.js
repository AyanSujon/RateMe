// ===== Menu Fixed =======
let main_menu = document.querySelector('.main_menu')

console.log(main_menu)

window.addEventListener('scroll', ()=>{
  let scrolling = this.scrollY

  if(scrolling > 100){
    main_menu.classList.add('fixed_menu')
  }
  else{
    main_menu.classList.remove('fixed_menu')
  }
})