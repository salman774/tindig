class Dogsdata {
  constructor(data) {
    Object.assign(this, data);
  }
  gethtmlofdogsdata() {
    const { name, avatar, age, bio } = this;
    return `<div class = "htmldogsdata">   
    <img src="${avatar}" alt="dogiee" />
    <div>
    <span> ${name},${age} </span>
    </div>
    <p>${bio}</p>
  <img id = "getlikedimage" src="images/badge-nope.png " alt="">
  <img id = "getunlikedimage" src="images/badge-like.png" alt="">
  </div>`;
  }
  likefunction() {
    document.getElementById("getlikedimage").style.display = "block";
    document.getElementById("getunlikedimage").style.display = "none";
    this.hasBeenLiked = true;
  }
  unlikefunction() {
    document.getElementById("getlikedimage").style.display = "none";
    document.getElementById("getunlikedimage").style.display = "block";
    this.hasBeenSwiped = true;
    this.hasBeenLiked = true;
  }
}

export { Dogsdata };
