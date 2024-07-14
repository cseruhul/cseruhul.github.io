let myBtn1 = document.getElementById("myBtn1");
let myBtn2 = document.getElementById("myBtn2");
let myBtn3 = document.getElementById("sendId");

myBtn1.style.backgroundColor = "#495057";
myBtn2.style.backgroundColor = "#495057";
myBtn3.style.backgroundColor = "#495057";

myBtn1.style.width = "230px";
myBtn2.style.width = "230px";
myBtn3.style.width = "230px";

myBtn1.style.color = "white";
myBtn2.style.color = "white";
myBtn3.style.color = "white";

// myBtn1.style.marginBottom = "200px";
// myBtn2.style.marginBottom = "200px";

myBtn1.addEventListener("mouseover", () => {
  console.log("My Script is working.");
  myBtn1.style.backgroundColor = "#bd5d38";
});
myBtn1.addEventListener("mouseout", () => {
  console.log("My Script is working.");
  myBtn1.style.backgroundColor = "#495057";
});

myBtn2.addEventListener("mouseover", () => {
  console.log("My Script is working.");
  myBtn2.style.backgroundColor = "#bd5d38";
});
myBtn2.addEventListener("mouseout", () => {
  console.log("My Script is working.");
  myBtn2.style.backgroundColor = "#495057";
});

myBtn3.addEventListener("mouseover", () => {
  console.log("My Script is working.");
  myBtn3.style.backgroundColor = "#bd5d38";
});
myBtn3.addEventListener("mouseout", () => {
  console.log("My Script is working.");
  myBtn3.style.backgroundColor = "#495057";
});
