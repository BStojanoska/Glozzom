// Select the li in nav bar, and because I get them in node list, make an array from them in order to use forEach method
const listItems = Array.from(document.querySelectorAll('.nav-item'));

// After page load, compare window url with the li's url, if it's true then add the class active to the corresponding li. Remove the class active for other li
window.addEventListener("load", () => {
    listItems.forEach(li => {
        if (window.location.href == li.firstElementChild.href) {
            li.classList.add('active', 'active-nav');
        } else {
            li.classList.remove('active', 'active-nav');
        }
    })
});

//  YouTube API scripts / required
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video', {
        events: {
            'onReady': onPlayerReady
        },
    });
}

function onPlayerReady(event) {
    // On open modal play video
    $("#videoID").on('show.bs.modal', function () {
        player.playVideo();
    });
    player.stopVideo();
}

//  On close modal stop video
$("#videoID").on('hide.bs.modal', function () {
    player.stopVideo();
});

// Modal Gallery
$(document).ready(function () {
    $('#gallery').on('show.bs.modal', function (e) {
        var image = $(e.relatedTarget).attr('src');
        $(".img-responsive").attr("src", image);
    });
});

// // Services page - show first accordion when on mobile
// window.addEventListener('resize', () => {
//     if (window.matchMedia("(max-width: 425px)").matches) {
//         document.querySelector('#collapseOne').classList.add('show');
//     } else {
//         document.querySelector('#collapseOne').classList.remove('show');
//     }
// })