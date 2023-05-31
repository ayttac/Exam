const title = document.querySelector(".menuTittle");
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const exit = document.querySelector(".exit");
exit.style.display = title.style.display === 'none' ? 'block' : 'none';
menu.addEventListener("click",() =>{
    menu.style.display = title.style.display === 'none' ? 'block' : 'none';
    exit.style.display = title.style.display === 'none' ? 'block' : 'block';
    nav.style.display = nav.style.display === 'none' ? 'block' : 'block';
    title.style.display = title.style.display === 'none' ? 'block' : 'block';
})

exit.addEventListener("click",() =>{
    nav.style.display = nav.style.display === 'none' ? 'block' : 'block';
    title.style.display = title.style.display === 'none' ? 'block' : 'none';
    exit.style.display = title.style.display === 'none' ? 'block' : 'none';
})

// nav end


