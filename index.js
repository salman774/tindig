import { Dogsdata } from "./class.js";
import { dogs } from "./data.js";

let teddyboy = new Dogsdata(dogs.teddy);
let bellagirl = new Dogsdata(dogs.bella);
let rexboy = new Dogsdata(dogs.rex);

const render = () => {
  document.getElementById("image-container").innerHTML =
    teddyboy.gethtmlofdogsdata();
};
render();

const like = () => {
  teddyboy.likefunction();
};

const unlike = () => {
  teddyboy.unlikefunction();
};

document.getElementById("unliked").addEventListener("click", like);
document.getElementById("liked").addEventListener("click", unlike);
