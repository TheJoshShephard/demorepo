/* JQuery Loader */
$(document).ready(function () {
    var loader = $('.loader'); 
    var loaderVideo = $('.loader video'); 
    var videoSource = $('#videoSource'); 

    loaderVideo[0].preload = "auto";
  
if (window.innerWidth <= 428) {
        // Default for Phones
        videoSource.attr('src', 'https://cdn.jsdelivr.net/gh/username/reponame/Assets/Common/Videos/horizontalvideo.mp4');
    } else if (window.innerWidth <= 810) {
        // Default for Tablets
        videoSource.attr('src', 'https://cdn.jsdelivr.net/gh/username/reponame/Assets/Common/Videos/horizontalvideo.mp4');
    } else {
        // Default for Desktops
        videoSource.attr('src', 'https://cdn.jsdelivr.net/gh/username/reponame/Assets/Common/Videos/horizontalvideo.mp4');
    }
      
    loaderVideo[0].load();
  
    loader.css('transition', 'opacity 3s ease-out');
  
    setTimeout(function () {
        loader.css('opacity', '0'); 
    }, 2000);

    setTimeout(function () {
        loader.css('display', 'none'); 
    }, 5000); 
});