/*

Exercise 2
----------

- Open index.html using Live Server
- Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
- Update your code to make the colour change every 5 seconds to something different.
  Hint: try searching for setInterval.

*/
let i = 0;
function change() {
  let doc = document.getElementById("main");
  let color = ["grey", "blue", "brown", "green", "yellow"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 5000);

/*
let main = document.getElementById('main);
function random_bg_color() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  main.style.backgroundColor = bgColor

}
setInterval(random_bg_color, 5000)


function changeBG() {
  // const mainBG = document.getElementById("main");
  // mainBG.style.backgroundColor = "red";
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}

setInterval(changeBG, 5000);


var randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
setInterval(() => (document.body.style.backgroundColor = randomColor()), 2000);
 */