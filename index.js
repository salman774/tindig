import { Dogsdata } from "./class.js";
import { dogs } from "./data.js";

let teddyboy = new Dogsdata(dogs.teddy);
let bellagirl = new Dogsdata(dogs.bella);
let rexboy = new Dogsdata(dogs.rex);

document.getElementById("image-container").innerHTML =
  teddyboy.gethtmlofdogsdata();
