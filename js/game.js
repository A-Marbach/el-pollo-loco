let canvas;
let world;
let keyboard = new Keyboard();
let sound_is_mute = false;

function startScreen() {
    document.getElementById('start-screen').classList.remove('d-none');
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('win').classList.add('d-none');
    document.getElementById('mobile-keys').classList.add('d-none');
}


function init() {
    initLevel();
    document.getElementById('start-screen').classList.add('d-none');
  
    document.getElementById('win').classList.add('d-none');
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('mobile-keys').classList.remove('d-none');
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}



function fullscreen(){
    let fullscreen = document.getElementById('fullscreen');
    document.getElementById('start-screen').style.width = '100%';
    openFullscreen(fullscreen);
}

function openFullscreen(elem) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }

  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  }

  function closeStory(){
    document.getElementById('info-container').classList.add('d-none');
    document.getElementById('btn').classList.remove('d-none');
    document.getElementById('nav-bar').classList.remove('d-none');
    document.getElementById('start-screen').classList.remove('blur');
    document.getElementById('mobile-btn').style.opacity= 1;
  }

  function openStory(){
    document.getElementById('info-container').classList.remove('d-none');
    document.getElementById('btn').classList.add('d-none');
    document.getElementById('nav-bar').classList.add('d-none');
    document.getElementById('start-screen').classList.add('blur');
    document.getElementById('mobile-btn').style.opacity= 0;
  }

  // function muteSound() {
//     let sound = document.getElementById('mute');
//     if (!sound_is_mute) {
//         sound_is_mute = true;
//         sound.src = 'img/ton-aus.png';
//     document.getElementById('mute').style.opacity = 0.2;

//     } else if(sound_is_mute){
//         sound.src = 'img/ton-an.png';
//         sound_is_mute = false;
//     document.getElementById('mute').style.opacity = 1;
//     }
// }






