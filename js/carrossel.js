
let loop = document.getElementById("radio1").checked = true;

setInterval (function(){
    nexImage();
}, 5000);

function nexImage(){
    loop++;
    if(loop > 4){
        loop = 1;
    }

    document.getElementById("radio" + loop).checked = true;
};