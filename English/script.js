window.onload = viewCount;
function themeToggleStart(){
  /* First time loads theme based on browser preferred theme */
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && localStorage.getItem("theme") === null){
    document.body.classList.add("dark");
    document.getElementById("switch-text").innerHTML = '<i class="far fa-moon"></i>';
    localStorage.setItem("theme", "dark");
  }
  /* Next times loads theme based on the last changes applied */
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme == "dark"){
    document.body.classList.add("dark");
    document.getElementById("switch-text").innerHTML = '<i class="far fa-moon"></i>';
  }
}

function themeToggleBtn(){
  /* Theme toggle by button pressing */
  var element = document.body;
  element.classList.toggle("dark");
  let theme = "light";
  if (document.body.classList.contains("dark")){
    theme = "dark";
    document.getElementById("switch-text").innerHTML = '<i class="far fa-moon"></i>';
  }else{
    document.getElementById("switch-text").innerHTML = '<i class="far fa-sun"></i>';
  }
  localStorage.setItem("theme", theme);
}

function iconClick(id){
  /* Icon shrink and grow on click */
  document.getElementById(id).classList.add(id + "-small");
  setTimeout(function(){
    document.getElementById(id).classList.remove(id + "-small"); }, 300);
}

function viewCount(){
  /* User's own total views easter egg */
  if (localStorage.view){
    localStorage.view = Number(localStorage.view) + 1;
  }else{
    localStorage.view = 1;
  }
  if (Number(localStorage.view) % 25 == 0){
    swal("Easter Egg!", "You have viewed my LinkForest " + localStorage.view + " times.", "info"); /* #Customisable */
  }
}

function visit(response){
  /* User's number in total visits of this LinkForest */
  if (Number(response.value) % 100 == 0){
    swal("Special Easter Egg!", "You are #" + response.value + " visiting my LinkForet.", "info"); /* #Customisable */
  }
}

function copy(text){
  /* Copy action */
  const el = document.createElement('textarea');
  el.value = text;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  swal("Success!", "'" + text + "'" + " copied to clipboard.", "success");
}

function onScroll(){
  /* On scroll makes the header stick to top */
  var header = document.getElementById("header");
  var sticky = header.offsetTop;
  if (window.pageYOffset > sticky){
    header.classList.add("sticky");
  }else{
    header.classList.remove("sticky");
  }
}
