//side nae bar

let burgar = document.querySelector('.burger')//this call for icon to the menu icon
let nav = document.querySelector('.nav')//this is call for name tages
let navbar = document.querySelector('.navbar-items')

burgar.addEventListener('click',()=>{
    navbar.classList.toggle('h-class')//this is used to class
    nav.classList.toggle('v-class')// this is used to also a class
})

//scrolled

window.addEventListener('scroll',()=>{
    let navbar = document.querySelector('.navbar')
    if(window.scrollY>20){
        navbar.classList.add('scrolled')
    }
    else{
        navbar.classList.remove('scrolled')
    }
})
//arrow 
document.querySelector('#to-top').addEventListener('click',()=>{
    let TopInterval = setInterval(()=>{
        let Arrow = document.body.scrollTop>0? document.body:document.documentElement;

        if(Arrow.scrollTop>0){
            Arrow.scrollTop=Arrow.scrollTop-50;
        }
        else if(Arrow.scrollTop<1){
            clearInterval(TopInterval)
        }
    },10)
},false)

function showscroll(){
    let TopButton =document.getElementById('to-top');
    if(document.body.scrollTop>100 || document.documentElement.scrollTop>100){
        TopButton.classList.add('show')
    }
    else{
        TopButton.classList.remove('show')
    }

}

window.onscroll=()=>{
    showscroll()
}
//scroll 
const scrollRevealOption ={
    distance:'50px',
    origin:'bottom',
    duration:2000,
    delay:500,
    reset:true
};


ScrollReveal().reveal('.heading1',{
    ...scrollRevealOption
})
ScrollReveal().reveal('.box',{
    ...scrollRevealOption
})
ScrollReveal().reveal('.left',{
    ...scrollRevealOption
})
ScrollReveal().reveal('.right',{
    ...scrollRevealOption
})
ScrollReveal().reveal('.heading1',{
    ...scrollRevealOption
})
ScrollReveal().reveal('.icons',{
    ...scrollRevealOption
})
ScrollReveal().reveal('.item_box',{
    ...scrollRevealOption
})

ScrollReveal().reveal('.heading',{
    ...scrollRevealOption
})
