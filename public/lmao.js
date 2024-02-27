
let consolefun = function () {
    //if the console form is not visible, show it, else hide it
    if (window.getComputedStyle(document.getElementById("consoleform"), null).display == "none") {
        document.getElementById("consoleform").style.display = "block";

    } else {
        document.getElementById("consoleform").style.display = "none";
    }
}