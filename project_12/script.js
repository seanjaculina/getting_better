// select all the toggle buttons
let toggleBtn =  document.querySelectorAll('.faq-toggle');

// loop through each toggle button
toggleBtn.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        btn.parentNode.classList.toggle('active');
    })
})