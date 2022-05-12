/* img = til endring av bildet inni trommen */
const img = document.querySelector("#img")

/* My array called arr = 8 diffrent object width diffrent key's */
const arr = [{
        id: 'clap',
        key: 'a',
        audio: 'DrumSounds/clap.wav'
        
    }, 
    {
        id: 'hihat',
        key: 's',
        audio: 'DrumSounds/hihat.wav'
        
    },
    {
        id: 'kick',
        key: 'd',
        audio: 'DrumSounds/kick.wav'
        
    },
    {
        id: 'openhat',
        key: 'f',
        audio: 'DrumSounds/openhat.wav'
        
    },
    {
        id: 'ride',
        key: 'j',
        audio: 'DrumSounds/ride.wav'
        
    },
    {
        id: 'snare',
        key: 'k',
        audio: 'DrumSounds/snare.wav'
        
    },
    {
        id: 'tink',
        key: 'l',
        audio: 'DrumSounds/tink.wav'
        
    },
    {
        id: 'tom',
        key: 'ø',
        audio: 'DrumSounds/tom.wav'
        
    }
]

/* The forEach loops the arr Array, and check if the keydown.key is equal with arr.key
    If so!, it make a new variable with ( new Audio arr.audio ) 
    ( new Audio ) are inside the forEach becuse the sound change faster for each keydown push'ed
    And then play() will execute the sound
    I also change the background image inside the #img  with the same name as arr e.id
    I change name of 8 pitcure to the name of each id. */
document.body.addEventListener("keydown",(x)=>{
     arr.forEach( (e)=>{
         if ( x.key === e.key ){
            audio =  new Audio(`${e.audio}`)
            audio.play()
            img.style.backgroundImage =  `url(img/${e.id}.png)`;
         }})})