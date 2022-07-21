const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');
// textArea.focus(); automatically focus 
function createTags(input) {
    // split the array at ,
    // cant be empty string
    // trim any white space
    const tags = input.split(',').filter(tag => tag.trim() !== '')
    .map(tag => tag.trim())

    
    tagsEl.innerHTML = '';
    
    tags.forEach(tag =>{
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    })
}



function higlightTag(tag) {
    tag.classList.add('highlight');
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}

pickRandomTag = () => {
    const tags = document.querySelectorAll('.tag'); // returns a node list (similar to array)

    return tags[Math.floor(Math.random() * tags.length)];
}





textarea.addEventListener('keyup', (e) =>{
    createTags(e.target.value);


    if(e.key === 'Enter'){
        setTimeout(() =>{
            e.target.value = ''; // clear the input value
        }, 10)
        
        
        randomSelect();
    }
})



randomSelect = () =>{
  const times = 30;

  const interval = setInterval(() =>{
    const randomTag = pickRandomTag();

    higlightTag(randomTag);

    // setTImeout function to unhighlight the tag every 100 ms
    setTimeout(() => {
        unHighlightTag(randomTag);
    }, 100)
  }, 100);


  setTimeout(() =>{
    clearInterval(interval)
    
    setTimeout(() =>{
        const randomTag = pickRandomTag();
        higlightTag(randomTag);
    }, 100)
  }, times * 100)
}
