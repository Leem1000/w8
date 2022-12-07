// abrir menu responsive width < 568

const menuh = document.querySelector('#menuh');
const ulmenu = document.querySelector('#ulmenu');

menuh.addEventListener('click', ()=>{
    ulmenu.classList.toggle('mostrar')
})

//Mostrar y Desaparecer SUBMENU

const aPafondo = document.querySelectorAll('.aPafondo')

for(let i=0; i<aPafondo.length; i++){
    aPafondo[i].addEventListener('click',function(){

        if(window.innerWidth<768){

            const ulsubmenu = this.nextElementSibling;
            const height = ulsubmenu.scrollHeight;

            if(ulsubmenu.getAttribute('style')){
                ulsubmenu.removeAttribute('style');
                ulsubmenu.classList.add('reduced')


            }else{
                ulsubmenu.style.height = height +"px";
                ulsubmenu.classList.remove('reduced')
                
            }




        }
    })



}

//Mostrar y Desaparecer SUBMENU HORIZONTAL

let ulsubmenu = document.querySelectorAll('.ulsubmenu');


for(let x=0; x<ulsubmenu.length; x++){

    ulsubmenu[x].addEventListener('click', function(){

        if(window.innerWidth>768){

       if(ulsubmenu[x].classList.contains('hide')){
        ulsubmenu[x].classList.remove('hide')

       }else{
        ulsubmenu[x].classList.add('hide')
       }
    }

    })


}

let aPasublink = document.querySelectorAll('.aPasublink');


for(let x=0; x<aPasublink.length; x++){


        aPasublink[x].addEventListener('mouseover', ()=>{

            ulsubmenu[x].classList.remove('hide')
            
        
        })

        if(innerWidth<768){
            aPasublink[x].addEventListener('click', ()=>{
                ulsubmenu[x].classList.remove('hide')
            })
        }

    

}

//DESAPARECER MENU RESPONSIVE y mostrar CONTENIDO de Pagina

const header = document.querySelector('.header');

header.addEventListener('click', (e) =>{


        if(e.target.classList.contains('alink')){
            ulmenu.classList.remove('mostrar')
        }

    

})




