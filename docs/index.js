const nav = document.getElementById('loading-nav')
const hero = document.getElementById('welcome')
const about = document.getElementById('loading-about')
const myWork = document.getElementById('loading-my-work')
const skills = document.getElementById('loading-skills')
const footer = document.getElementById('loading-footer')
const navLinks = document.querySelectorAll('.nav-links a')
const sections = [hero, about, myWork, skills, footer]
const scrollToTop = document.getElementById('back-to-top')
const dark = document.getElementById('dark')
let browserHeight 

window.addEventListener('load', (e)=>{
    browserHeight = window.innerHeight
    
    if(dark.checked){
        document.querySelector('body').classList.add('dark')
    }
})

dark.addEventListener('change', (e)=>{
    if (dark.checked){
        document.querySelector('body').classList.add('dark')
        document.querySelector('body').classList.remove('light')
    } else {
        document.querySelector('body').classList.remove('dark')
        document.querySelector('body').classList.add('light')
    }
})

scrollToTop.addEventListener('click', ()=>{
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
})


window.addEventListener("scroll", (e)=>{
    //add background color to nav bar
    if (window.scrollY > 60){
        nav.classList.add('nav-bg')
        console.log('add')
    } else {
        nav.classList.remove('nav-bg')
    }
    // calculate each section offset top  and check if the section is current section
    sections.forEach(el=>{
      if (el.getBoundingClientRect().y / browserHeight >0 &&
        el.getBoundingClientRect().y / browserHeight < 0.6){
    // remove pre-load and add loaded classes to the section
        
        el.classList.remove('pre-load')
        el.classList.add('loaded')
        
     // add active to nav bar link
            addNavActive(el.id)
        }
        else if (el.id === "welcome" && window.scrollY / browserHeight <0.8){
     
                hero.classList.add('loaded')
                el.classList.remove('pre-load')
             
        
            addNavActive(el.id)
        }
    })  
})

const addNavActive = (curEl)=>{
    navLinks.forEach(e=>{
        e.classList.remove('active')
    })
    document.getElementById(`nav-${curEl}`).classList.add('active')
}

