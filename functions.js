function Scrolling(){
    var thumb = window.scrollY;
    var blur = document.getElementById("blur");
    if (thumb > 0) {
        blur.style.transform = "translate(0px,-" + (thumb) + "px) scale(" + (1 + (thumb * .001)) + ")";
    } else {
        blur.style.transform = "translate(0,0)";
    }
}