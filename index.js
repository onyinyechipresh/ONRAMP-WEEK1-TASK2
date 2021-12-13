function submit(e){
    e.preventDefault();
let form = document.querySelector("#form");
let name = document.querySelector("#name").value.trim();
let email = document.querySelector("#email").value.trim();
let month = document.querySelector("#month").value;
let day = document.querySelector("#day").value;
let year = document.querySelector("#year").value;
let hour = document.querySelector("#time1").value;
let minute = document.querySelector("#time2").value;
let ampm = document.querySelector("#time3").value;


// if(name == ""){
//     alert('Name cannot be blank!');
// }

// else if(email == ""){
//     alert('Email cannot be blank');
// }
// else if(!email.contain('.com')){
//     alert('Invalid Email!');
// }
// else{
//     alert("successful");
// }
}


form.addEventListener("submit", submit);

let decrementBtn = document.querySelector("#decrement");
let spanElement = document.querySelector("#show");
let incrementBtn = document.querySelector("#increment");
let text1="people";
let text2="person";
let text3="persons";

decrementBtn.addEventListener('click', decrementcounter);
incrementBtn.addEventListener('click', incrementcounter);

let count=0;

function decrementcounter(){
    count--;
    spanElement.textContent=count;
    if(count >=2){
        spanElement.textContent=`${count} ${text1}`;
    }
    else{
        spanElement.textContent=`${count} ${text2}`;
    }
}

function incrementcounter(){
    count++;
    spanElement.textContent=count;
    if(count >=2){
        spanElement.textContent=`${count} ${text1}`;
    }
    else{
        spanElement.textContent=`${count} ${text2}`;
    }
}
