$(document).ready(function () {
    $("#flipbook").turn({
        width: 800,
        height: 600,
        autoCenter: true,
        duration: 1000
    });

    // Make it responsive
    $(window).resize(function () {
        var width = Math.min($(window).width(), 1000);
        var height = Math.min($(window).height(), 600);
        $("#flipbook").turn("size", width, height);
    }).resize();
});
document.addEventListener('DOMContentLoaded', function() {
    // Create audio element
    const pageFlipSound = new Audio('../audio/page-flip-9.mp3');
    
    pageFlipSound.load();

    // Add sound to turn.js events
    $("#flipbook").bind("turning", function(event, page, view) {
        pageFlipSound.currentTime = 0; // Reset sound to start
        pageFlipSound.play();
    });
    
    // Add sound to navigation buttons
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    prevBtn.addEventListener('click', function() {
        pageFlipSound.currentTime = 0;
        pageFlipSound.play();
        $('#flipbook').turn('previous');
    });
    
    nextBtn.addEventListener('click', function() {
        pageFlipSound.currentTime = 0;
        pageFlipSound.play();
        $('#flipbook').turn('next');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    prevBtn.addEventListener('click', function () {
        $('#flipbook').turn('previous');
    });

    nextBtn.addEventListener('click', function () {
        $('#flipbook').turn('next');
    });

    // Hide/show buttons based on page
    $("#flipbook").bind("turned", function (event, page, view) {
        if (page === 1) {
            prevBtn.style.visibility = 'hidden';
        } else {
            prevBtn.style.visibility = 'visible';
        }

        if (page === $('#flipbook').turn('pages')) {
            nextBtn.style.visibility = 'hidden';
        } else {
            nextBtn.style.visibility = 'visible';
        }
    });
});