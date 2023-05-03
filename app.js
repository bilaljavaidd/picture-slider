const imagecontainer = document.querySelector('.imagecontainer')
const number = document.querySelector('.number')
const btnNext = document.querySelector('.btnNext')
const btnPrev = document.querySelector('.btnPrev')

let a =1;


btnNext.addEventListener('click',()=>{
    console.log(a)
    a++
    if(a>10){
        btnNext.classList.add('hidden')
    }
    else{
        imagecontainer.src = `./asset/img (${a}).jpg`
        number.innerHTML= a
        btnPrev.classList.remove ('hidden')
    } 
})

btnPrev.addEventListener('click',()=>{
    a--;
    if(a<1){
        btnPrev.classList.add('hidden')
    }
    else{
        btnNext.classList.remove('hidden')
        imagecontainer.src = `./asset/img (${a}).jpg`
    number.innerHTML = a
}
})