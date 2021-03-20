const audio = document.querySelector("audio")
let sonid = document.querySelector('#sonic');
let i = document.querySelector('i');
sonic.children[0].addEventListener('click', () => {
    if (audio.muted == true) {
        audio.muted = false;
        i.classList.replace("fa-volume-mute", "fa-volume-off");
    } else {
        audio.muted = true;
        i.classList.replace("fa-volume-off", "fa-volume-mute");
    }
});