//Responsive meni
const mobileMenu=()=>{
    let menu = document.querySelector('.header ul');
    let button=document.querySelector('.header button');

    if(button.innerText==='MENU'){
        menu.style.display='block';
        button.innerText='CLOSE';
    }
    else{
        menu.style.display='none';
        button.innerText='MENU';
    }

}

//Galerija

let rightButton = document.querySelector('#right-btn');
let leftButton = document.querySelector('#left-btn');
let pictures=document.querySelectorAll('.slider-images img')
let imageNumber=0;

//funkcija za pomeranje slika udesno

const moveRight=()=>{
        displayNone();
        imageNumber++;
    
        if(imageNumber==pictures.length){
            imageNumber=0;
        }
    
        pictures[imageNumber].style.display='block'

}

//funkcija za pomeranje slika ulevo

const moveLeft=()=>{
    displayNone();
    imageNumber--;
    if(imageNumber==-1){
        imageNumber=pictures.length - 1
    }

    pictures[imageNumber].style.display='block';

    
}

//event listeneri za strelice
rightButton.addEventListener('click', moveRight)

leftButton.addEventListener('click', moveLeft)

//funkcija za sakrivanje svih slika
const displayNone=()=>{
    pictures.forEach((image)=>{
        image.style.display='none';
    })
}

//portfolio
const portfolioSort=(button)=>{
    let category=button.getAttribute('data-category');
    let portfolioItems=document.querySelectorAll('.portfolio-single-item');

    portfolioItems.forEach((item)=>{
        item.style.display='none';
    });


    portfolioItems.forEach((item)=>{
        if(item.getAttribute('data-category').includes(category)){
            item.style.display= 'block';
            
        }
    });
    
    if(category=='sve'){
        portfolioItems.forEach((item)=>{
            item.style.display='block';
    });
}
}

//Otvaranje modal

const openModal=()=>{
    let modalWindow= document.querySelector('.popup-modal');
    let overlay=document.querySelector('.overlay');
    modalWindow.style.display='block';
    overlay.style.display='block';
}

//Zatvaranje modala
const closeModal=()=>{
    let modalWindow= document.querySelector('.popup-modal');
    let overlay=document.querySelector('.overlay');
    modalWindow.style.display='none';
    overlay.style.display='none';
}