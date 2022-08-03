const
div = document.querySelectorAll("div") ;

let arr = Array.from(div);
arr.shift();

let lowerCase = [];

for(var i = 0 ; i < arr.length ; i++){
    var low = arr[i].innerHTML.toLowerCase();
    lowerCase.push(low);
}

console.log(lowerCase[1]);
console.log(arr);


document.addEventListener("keydown" , (event) => {
    for(var j = 0 ; j <= 25 ; j++){

        if(event.key == arr[j].innerHTML || event.key == lowerCase[j]){
            arr[j].classList.toggle("active")
        } 
    }
});
document.addEventListener("keyup" , (event) => {
    for(var j = 0 ; j <= 25 ; j++){

        if(event.key == arr[j].innerHTML || event.key == lowerCase[j]){
            arr[j].classList.toggle("active")
        } 
    }
});
