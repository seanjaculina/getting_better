const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

stopSongs = () =>{
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);
        song.pause();

        song.currentTime = 0; // audio tags have a property of currentTime and must be set to zero to stop a song.
    })
}

sounds.forEach((sound) => {

    const btn = document.createElement('button');
    btn.classList.add('btn');
    
    btn.innerText = sound;

    btn.addEventListener('click', () =>{
        stopSongs();

        document.getElementById(sound).play();
    })

    document.querySelector('#buttons').appendChild(btn);

})

