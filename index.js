import { Dogsdata } from "./class.js";
import { dogs } from "./data.js";

let teddyboy = new Dogsdata(dogs.teddy);
let bellagirl = new Dogsdata(dogs.bella);
let rexboy = new Dogsdata(dogs.rex);

let arrayofdogs = [teddyboy, bellagirl, rexboy];
let arrayholdingdog = [];
for (let i = 0; i < 1; i++) {
  let array = arrayofdogs.shift();
  arrayholdingdog.push(array);
}
arrayholdingdog = arrayholdingdog[0];
console.log(arrayholdingdog);
// let arrayholdingdog = [arrayofdogs.shift()][0];

const render = () => {
  document.getElementById("image-container").innerHTML =
    arrayholdingdog.gethtmlofdogsdata();
};
render();

const like = () => {
  arrayholdingdog.likefunction();

  for (let i = 0; i < 1; i++) {
    arrayholdingdog = [];
    let array = arrayofdogs.shift();
    arrayholdingdog.push(array);
    arrayholdingdog = arrayholdingdog[0];
    console.log(arrayholdingdog);
    arrayholdingdog.gethtmlofdogsdata();
  }
  render();

  // console.log(arrayholdingdog.hasBeenLiked);
  // console.log(arrayholdingdog.hasBeenSwiped);
};

const unlike = () => {
  arrayholdingdog.unlikefunction();
  // console.log(arrayholdingdog.hasBeenLiked);
  // console.log(arrayholdingdog.hasBeenSwiped);
};

document.getElementById("unliked").addEventListener("click", like);
document.getElementById("liked").addEventListener("click", unlike);
