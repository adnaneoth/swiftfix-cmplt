


                //    manu reactive
const menuHamburger = document.querySelector(".humberger")
const navLinks = document.querySelector(".container")

menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
})

               //    search input
const chrchinput = document.querySelector(".chrch_input")
const iconsearch = document.querySelector(".icon_search")

iconsearch.addEventListener('click',()=>{
chrchinput.classList.toggle('affch_chrch')
})


              //    faq 
const faqs = document.querySelectorAll('.faqs')

faqs.forEach((faqs) =>{
    faqs.addEventListener('click',() =>{
        faqs.classList.toggle("active");
    })
})

            //     services drop down
var list = document.querySelector(".services-list");
var select = document.querySelector(".select");
    list.addEventListener('click',function(){
        
        select.classList.toggle("select-active");

    });



        //    modal

const modal = document.querySelector('.modal')
const open = document.querySelector('.open')
const close = document.querySelector('.close')
        
open.addEventListener('click',() =>{
modal.showModal();
})
        
close.addEventListener('click',()=>{
modal.close();
})




 
               
            
// scoping // local scope and global scope // let vs var and const
// datatypes (primitives and non primitives); undefined, NaN, symbol,
// typeof, booleans
// functions and type of funcs
// Arrays vs Objects
// Array functions vs String Functions
// Dom and Dom manipulations
// Regular Expressions (patterns and flags) Regex
