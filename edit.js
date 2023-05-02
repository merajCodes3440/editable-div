

// create a new element
let divelem = document.createElement('div');
// add text to that created element 

let val = localStorage.getItem('text');
let text;
if(val==null){
     text =document.createTextNode('THIS IS MY ELEMENT. CLICK HERE TO EDIT IT.');
}
else{
    text =document.createTextNode(val);
}
// positioning the element--
divelem.appendChild(text);
// add aditional properties ----

divelem.setAttribute('id','elem');
//divelem.setAttribute('style','border:2px solid white; width:150px; margin:34px;padding:23px');
let container = document.querySelector('.container');
container.appendChild(divelem);


// add event listener to divelem

divelem.addEventListener('click', function(){
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if(noTextAreas==0){
        let html = elem.innerHTML;
        divelem.innerHTML=` <textarea id="textarea" class="form-control textarea" id="exampleFormControlTextarea1" rows="3">${html}</textarea>`
    }
    // listen for the blur event on text area
    let textarea =document.getElementById('textarea');
    textarea.addEventListener('blur',function(){
        elem.innerHTML = textarea.value;
        localStorage.setItem('text' ,textarea.value);
    })
});