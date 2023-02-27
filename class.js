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
  </div>`;
  }
}

export { Dogsdata };
