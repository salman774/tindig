import { Dogsdata } from "./class.js";
import { dogs } from "./data.js";

let teddyboy = new Dogsdata(dogs.teddy);
let bellagirl = new Dogsdata(dogs.bella);
let rexboy = new Dogsdata(dogs.rex);
let button = false;

let arrayofdogs = [teddyboy, bellagirl, rexboy];
let arrayholdingdog = [];
for (let i = 0; i < 1; i++) {
  let array = arrayofdogs.shift();
  arrayholdingdog.push(array);
}
arrayholdingdog = arrayholdingdog[0];
console.log(arrayholdingdog);

const render = () => {
  document.getElementById("image-container").innerHTML =
    arrayholdingdog.gethtmlofdogsdata();
};
render();

const like = () => {
  if (!button) {
    arrayholdingdog.likefunction();
    newdogarray();
  }
};

const unlike = () => {
  if (!button) {
    arrayholdingdog.unlikefunction();
    newdogarray();
  }
};

document.getElementById("unliked").addEventListener("click", like);
document.getElementById("liked").addEventListener("click", unlike);

const newdogarray = () => {
  if (arrayofdogs.length > 0) {
    for (let i = 0; i < 1; i++) {
      arrayholdingdog = [];
      let array = arrayofdogs.shift();
      arrayholdingdog.push(array);
      arrayholdingdog = arrayholdingdog[0];
      console.log(arrayholdingdog);
      arrayholdingdog.gethtmlofdogsdata();
      button = true;
      const box = document.getElementById("box");
      box.classList.add("box");
    }
  } else {
    button = true;
    setTimeout(() => {
      arrayholdingdog.lastmessage();
      console.log("array ended");
    }, 2000);
  }
  setTimeout(() => {
    button = false;

    render();
  }, 2000);
};
