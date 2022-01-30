// const darkModeBg = document.getElementById('BackGroundColor');
// const switchButton = document.querySelector(".myCheck");

// function darkModeFunction() {
//     if (switchButton.checked == true){
//       darkModeBg.classList.add("dark-mode")
//     } else {
//       darkModeBg.classList.remove("dark-mode")
//     }
//   }


  const checkbox = document.getElementById('checkbox');

  checkbox.addEventListener('change', ()=>{
    document.body.classList.toggle('dark');
  })