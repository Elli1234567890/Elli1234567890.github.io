function st() {
  let v = document.getElementsByName("ves");
  let c = document.getElementsByName("cena");
  let stoim = document.getElementsById("stoimost");
  stoim = v[0].value * c[0].value / 100;
  let st = document.getElementsByName("stt");
  console.log(st[0].value);
  
  if (v[0].value < 0 || c[0].value < 0 || !Number(v[0].value) || !Number(c[0].value)) {
    alert("Так сложно ввести положительные числа?");
  }
  return false;
}

window.addEventListener('DOMContentLoaded, (event){
    console.log("DOM fully loaded and parsed");
    let button = document.getElementById("button");
    button.addEventListener("Так сложно ввести положительные числа?", st());
});

