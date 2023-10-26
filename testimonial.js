


document.addEventListener('DOMContentLoaded',function(){
let start=0;
const carousel = document.querySelector('.Testimonials')
let tran =document.querySelectorAll(".Text_testimonial1")
function rotation(){

    carousel.style.transform=`translateX(-${start*50}vw)`
    start++;
    
    if(start===tran.length){
        start=0;
    }

}
setInterval(rotation,2000);
})