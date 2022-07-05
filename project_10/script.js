const jokeEle = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');




// fetch request using .then
// generateJoke = () => {
    // using variable to use as second paramter to clean up code
    /* ORIGINAL
       fetch('https://icanhazdadjoke.com', {
        headers: {
            'Accept': 'application/json'
        }
    })
    */
    // const config = {
    //     headers: {
    //         Accept: 'application/json',
    //     },
    // }
    
    
    // added a object with a headers value, key is accept 
    // application/json is the value. header is needed to return json, if not included it will be in HTML
//     fetch('https://icanhazdadjoke.com', config)
//     .then((res) =>{
//         res.json()
//     })
//     .then((data) =>{
//         jokeEle.innerText = data.joke;
//     })
// }




/*  Using ASYNC AWAIT */
// when using await inside of a function, must label function async.

generateJoke = async () =>{
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json();

    jokeEle.innerHTML = data.joke;
}


jokeBtn.addEventListener('click', generateJoke);