const header = document.querySelector('header');
header.addEventListener('resize', () => {setHeaderHeight(); setBodySpc})
window.addEventListener('resize', setBodySpc)
setHeaderHeight()
setBodySpc()
function setHeaderHeight() {
    const headerHeight = header.offsetHeight;
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
}


function setBodySpc(){
    const headerHeight = header.offsetHeight;
    const windowHeight = window.innerHeight;
    let bodySpc = `${windowHeight - headerHeight}px`
    document.documentElement.style.setProperty('--body-spc', bodySpc);
}



let menuStatus = false

const logo = document.querySelector('.logo-con')
const html = document.querySelector('html')
const body = document.querySelector('body')
const menuItems = document.querySelectorAll('.menu-item')
const sas = document.querySelector('.sas')
const introSec = document.querySelector('.int-back-con')
const introTl = document.querySelector('.intro-sec-ttl')
const showing = document.querySelector('.showing')
const flIntro = document.querySelector('.fl-intro')
const listings = document.querySelectorAll('.listing')
const revTl = document.querySelector('.rev-ttl')
const revSub = document.querySelector('.rev-sub')
const rev = document.querySelectorAll('.tcon')
const revBtn = document.querySelector('.rev-btn')
const menu = document.querySelector('.mob-menu-con')
const x = document.querySelector('.close-img')
const about = document.querySelector('.about-sec')
const mtt = document.querySelector('.mtt')
const mya = document.querySelector('.mya')



const arr1 = [logo, sas]



logo.classList.add('ret-def')
const defObserver = new IntersectionObserver(
    entries => entries.forEach(
        entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('ret-def')
            defObserver.unobserve(entry.target)
        }
    }
    ),{threshold:.2}
)

arr1.forEach(cls => defObserver.observe(cls))

const animObserver = new IntersectionObserver(
    entries => entries.forEach(
        entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('ret-anim')
            }
            
        }
    )
)

function toggleMenu(phase){
    if(!phase){
        menuIn()
    }else if(phase){
        menuOut()
    }
}
function menuIn() {
    menuStatus = true;
    setTimeout( () => {menu.style.display = 'flex'}, 100 )
    if (menu.classList.contains('menu-out')) {
        menu.classList.remove('menu-out');
        x.classList.remove('x-spin-out');
    }
    menu.classList.add('menu-in');
    x.classList.add('x-spin');
    html.classList.add('no-scroll')
}

function menuOut() {
    menuStatus = false;
    menu.classList.remove('menu-in');
    x.classList.remove('x-spin');
    menu.classList.add('menu-out');
    x.classList.add('x-spin-out');
    html.classList.remove('no-scroll')
    menu.addEventListener('animationend', () => {
    if (!menuStatus) {
        menu.style.display = 'none';
    }
    }, { once: true });
}



menuItems.forEach(item => {animObserver.observe(item)})