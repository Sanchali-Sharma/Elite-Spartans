console.log("hello");
let index=0;
let audioItem = new Audio('OSANAM.mp3');
let playpause=document.getElementById('play');
let songbar=document.getElementById('bar');
let songs=[
    {songname:"", path:"",cover:"" },
    {songname:"", path:"",cover:"" },
    {songname:"", path:"",cover:"" },
    {songname:"", path:"",cover:"" },
    {songname:"", path:"",cover:"" },
    {songname:"", path:"",cover:"" },
    {songname:"", path:"",cover:"" },
    {songname:"", path:"",cover:"" },
    {songname:"", path:"",cover:"" },
    {songname:"", path:"",cover:"" },
    {songname:"", path:"",cover:"" },
    {songname:"", path:"",cover:"" },
    {songname:"", path:"",cover:"" },
    {songname:"", path:"",cover:"" },
    {songname:"", path:"",cover:"" },
]
playpause.addEventListener('click',()=>{
    if(audioItem.paused||audioItem.currentTime<=0){
        audioItem.play();
        playpause.classList.remove('fa-play');
        playpause.classList.add('fa-pause');
    }
    else{
        audioItem.pause();
        playpause.classList.remove('fa-pause');
        playpause.classList.add('fa-play');
    }
})
audioItem.addEventListener('timeupdate',()=>{
    prog=parseInt((audioItem.currentTime/audioItem.duration)*100);
    songbar.value=prog;
})
songbar.addEventListener('change',()=>{
    audioItem.pause();
    audioItem.currentTime=(songbar.value*audioItem.duration)/100 ;
    audioItem.play();
})
