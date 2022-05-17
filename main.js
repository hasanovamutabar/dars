// var btn='<div class="btn btn-primary"></div>';
// var btn2='<div class="btn btn-danger"></div>';
// var btn3='<div class="btn btn-success"></div>';
// var btn4='<div class="btn btn-warning"></div>';
// var btn5='<div class="btn btn-dark"></div>';
var btn = '';
const clr=['primary','danger','success','warning','dark']
for(var i=0; i<5; i++){
    btn += `<div class="btn btn-${clr[i]}"></div>`;
}



document.querySelector(`#root`).innerHTML=`<div class="container">${btn}</div>`;
