let colorOne = document.getElementById('color-a');
let colorTwo = document.getElementById('color-b');
let currentDirection = 'to bottom';
let outputCode = document.getElementById('code');
var btn = document.getElementById("mybtn");   //Refactored

function setDirection(value,_this){
    let directions = document.querySelectorAll(".buttons button");
    for(let i of directions){
        i.classList.remove('active');
    }
    _this.classList.add('active');
    currentDirection = value;
}

function generateCode(){
    outputCode.value = `background-image: linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value});`

    document.getElementsByTagName("BODY")[0].style.backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
    btn.style.backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`; //Button styling
}

function copyText(){
    outputCode.select();
    document.execCommand('copy');
    alert('Gradient Copied!');
}

generateCode();


// "Hide/Show Navbar" Button
btn.addEventListener("click", ()=>{
    if(btn.innerText === "Hide Nav bar"){
        btn.innerText = "Show Nav bar";
    }else{
        btn.innerText= "Hide Nav bar";
    }
});

// Hide/Show Navbar function
btn.addEventListener("click", function(){
    var mybox= document.getElementById("mydiv");
    if(mybox.style.display =="none"){
      mybox.style.display="block";
    }
    else{
      mybox.style.display="none";
    }
  })
