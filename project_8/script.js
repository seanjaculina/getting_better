const labels = document.querySelectorAll('.form-control label')

labels.forEach(label =>{
    label.innerHTML = label.innerText.split('')
    .map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`)
    .join('');
})
// grab each letter inner text, split to put it into an array, map to create a array with the string inside of it, join to put back into a string.