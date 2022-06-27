const boxes = document.querySelectorAll('.box');


checkBoxes = () =>{
    const triggerBottom = (window.innerHeight / 5 * 4);

    boxes.forEach((box) =>{

        // method returns a DOMrect object providing information about
        // the size of an element and its position relative to the viewport.
        // "where in the viewport is it"
        const boxTop = box.getBoundingClientRect().top;

        // if the top of the box is less than the triggerbottom add the class of show
        if(boxTop < triggerBottom){
            box.classList.add('show');
        }
        else{
            box.classList.remove('show');
        }

    })
}

// adding event listener on the window listening for scrolling, then calling checkboxes function
window.addEventListener('scroll', checkBoxes);



checkBoxes();