// const toggleBG = document.querySelector('.switch');

// //darkmode
// function darkModeTrans(){
//     const darkModeBG = document.body;
//     darkModeBG.classList.toggle("dark-mode");
//     toggleBtnColor();
// }
const darkModeBg = document.querySelector('.BackGroundColor');
const switchButton = document.getElementById("myCheck");

function darkModeFunction() {
    // const darkModeBg = document.body;
    if (switchButton.checked == true){
      darkModeBg.classList.add("dark-mode")
    } else {
      darkModeBg.classList.remove("dark-mode")
    }
  }
