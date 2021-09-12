let myHeading = document.querySelector('h1');
myHeading.textContent = 'Winnie the Poohs!';

// document.querySelector('html').onclick = function() {
//     alert("Don't touch me!!");
// }

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/winnie.jpeg') {
      myImage.setAttribute('src', 'images/winnie2.jpeg');
    } else {
      myImage.setAttribute('src', 'images/winnie.jpeg');
    }
}

let myButton = document.querySelector('button');
function setUserName(){
    let myName = prompt("Please input your name: ");
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Winnie really likes " + myName;
    }
}
    

if(!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Winnie really likes " + storedName;
}

myButton.onclick = function() {
    setUserName();
}