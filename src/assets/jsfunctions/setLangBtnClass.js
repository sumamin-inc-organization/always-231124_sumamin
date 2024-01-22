
const langBtns = document.querySelectorAll(".lang-btn-text");

 

function removeActiveClass(){
    langBtns.forEach(btn =>{
        btn.classList.remove('active-lang');
    })
}

export default function SetActiveLangBtnClass(btn){
    removeActiveClass();
    btn.classList.add('active-lang');
}