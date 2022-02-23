const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const btnMobileMenu = document.getElementById('btn-mobile-menu')
const btnMobileMenu1 = document.getElementById('btn-mobile-menu1')
const btnMobileMenu2 = document.getElementById('btn-mobile-menu2')
const btnMobileMenu3 = document.getElementById('btn-mobile-menu3')
const btnMobileMenu4 = document.getElementById('btn-mobile-menu4')
const btnMobileMenu5 = document.getElementById('btn-mobile-menu5')
const btnMobileMenu6 = document.getElementById('btn-mobile-menu6')
const btnMobileMenu7 = document.getElementById('btn-mobile-menu7')

function navToggle() {
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')


}
btn.addEventListener('click', navToggle)


function ocultarMobile() {
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
 
}
btnMobileMenu.addEventListener('click', ocultarMobile)
btnMobileMenu1.addEventListener('click', ocultarMobile)
btnMobileMenu2.addEventListener('click', ocultarMobile)
btnMobileMenu3.addEventListener('click', ocultarMobile)
btnMobileMenu4.addEventListener('click', ocultarMobile)
btnMobileMenu5.addEventListener('click', ocultarMobile)
btnMobileMenu6.addEventListener('click', ocultarMobile)
btnMobileMenu7.addEventListener('click', ocultarMobile)
