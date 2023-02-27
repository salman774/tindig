import { Dogsdata } from "./class.js";
import { dogs } from "./data.js";

let teddyboy = new Dogsdata(dogs.teddy);

document.getElementById("image-container").innerHTML =
  teddyboy.gethtmlofdogsdata();
