// document.addEventListener("click", ScrollTop);
function ScrollTop() {
    window.scrollTo(0, 0);
}
//når den er mindre end 900px bred 	

var mq = window.matchMedia("(max-width: 900px)");

if (mq.matches) {
    var headernav = document.querySelector('#headernav');

    //Farven på navigations baren når den er mindre mindre end 570px, Tablet og mobil.
    headernav.style.background = "hsla(0,0%,100%,1.00)"; //Farven på boxen under nav linjen //
    headernav.style.boxShadow = "0px 1px 20px hsla(0,0%,0%,0.15)" // Shadow på nav boxen //
}

else {
    var desktop_header = document.querySelector('#headernav');

    window.onscroll = function () {

        if (window.pageYOffset > 70) {  //Tallet 40 indikere hvor meget man skal rulle ned før at boxen dukker op//

            //Farven på boxen under nav linjen
            desktop_header.style.background = "hsla(0,0%,100%,0.90)";
            // Shadow på nav boxen
            desktop_header.style.boxShadow = "0px 1px 20px hsla(0,0%,0%,0.10)"
        }

        else {
            desktop_header.style.background = "transparent" //The color of the nav box, will NOT appear if one doesn't scroll down the page//
            desktop_header.style.boxShadow = "none" //shadow under the nav box wont appear if one doesn't scroll down the page//
        }
    }
}	