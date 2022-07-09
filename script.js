var music = document.querySelector("audio");
var play = document.getElementById("play");
var img = document.querySelector('img');
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var title = document.getElementById('title');
var artist = document.getElementById('artist');



var pausemusic=()=>{
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");
    isplaying=false;  
}

var playmusic=()=>{
        music.play();
        play.classList.replace("fa-play","fa-pause");
        img.classList.add("anime");
        isplaying=true;
}

let isplaying = true;

play.addEventListener('click',()=>{

    isplaying ? pausemusic():playmusic();
    
})


var music_data = [
    {
        title:"THE LOYALIST",
        artist:"LOTUS LANE",
        audio:"songs/song-1.mp3",
        image:"images/music-1.jpeg"
    },
    {
        title:"The Producers",
        artist:"MOIZ ALI",
        audio:"songs/song-2.mp3",
        image:"images/music-2.jpeg"

    },
    {
        title:"The Khans",
        artist:"Atif Aslam",
        audio:"songs/song-3.mp3",
        image:"images/music-3.jpeg"

    }
] 
var i =1;
var j;
next.addEventListener('click',()=>{
    artist.innerHTML=music_data[i].artist;
    title.innerHTML=music_data[i].title;
    music.src=music_data[i].audio;
    img.src=music_data[i].image;
     j=i;
    i++;


    if(i==music_data.length){
        i=0;
    }
    playmusic();

})

prev.addEventListener('click',()=>{
    j=j-1;
    artist.innerHTML=music_data[j].artist;
    title.innerHTML=music_data[j].title;
    music.src=music_data[j].audio;
    img.src=music_data[j].image;

    
   if(j==0){

    j=music_data.length;
   }

   playmusic();

    
})

