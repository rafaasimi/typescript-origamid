// querySelector
var video = document.querySelector("#videoPrincipal");
if (video instanceof HTMLVideoElement) {
    console.log(video.volume);
}
// querySelectorAll
var links = document.querySelectorAll(".link");
links.forEach(function (link) {
    if (link instanceof HTMLAnchorElement) {
        console.log(link.href);
    }
});
