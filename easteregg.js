const myButton = document.querySelector("#myButton");
const myImg = document.querySelector("#myImg");
const notsad = document.querySelector("#notsad");
const sad = document.querySelector("#sad");


myButton.addEventListener("click", () => {

    if(myImg.style.visibility == "visible"){
        myImg.style.visibility = "hidden";
        myImg2.style.visibility = "visible";
        notsad.style.visibility = "visible";
        sad.style.visibility = "hidden";
    }
    else{
        notsad.style.visibility = "hidden";
        myImg2.style.visibility = "hidden";
        myImg.style.visibility = "visible";
        sad.style.visibility = "visible";
    }
})