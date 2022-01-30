// const toggleBG = document.querySelector('.switch');

// //darkmode
// function darkModeTrans(){
//     const darkModeBG = document.body;
//     darkModeBG.classList.toggle("dark-mode");
//     toggleBtnColor();
// }
const darkModeBg = document.getElementById('BackGroundColor');
const switchButton = document.querySelector(".myCheck");

function darkModeFunction() {
    if (switchButton.checked == true){
      darkModeBg.classList.add("dark-mode")
    } else {
      darkModeBg.classList.remove("dark-mode")
    }
  }
