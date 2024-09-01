
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const carsDiv = document.querySelector(".cars");

let tx = 0;

nextBtn.addEventListener("click", event => {
    if(tx > -75){
        tx -= 5;
    }
    else{
        tx = 0;
    }
    carsDiv.style.transform = `translatex(${tx}%)`;
} );

backBtn.addEventListener("click", event => {
    if(tx < 0){
        tx += 5;
    }
    else{
        tx = -75;
    }
    carsDiv.style.transform = `translatex(${tx}%)`;
});

