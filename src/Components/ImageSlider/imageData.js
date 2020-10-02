// Import Exterior Images
const touringExterior = require.context('../../assets/images/gallery/exterior/touring/', true);
const exlExterior = require.context('../../assets/images/gallery/exterior/exl/', true);
const exExterior = require.context('../../assets/images/gallery/exterior/ex/', true);
const sportExterior = require.context('../../assets/images/gallery/exterior/sport/', true);
const lxExterior = require.context('../../assets/images/gallery/exterior/lx/', true);

// Import Interior Images
const touringInterior = require.context('../../assets/images/gallery/interior/touring/', true);
const exlInterior = require.context('../../assets/images/gallery/interior/exl/', true);
const exInterior = require.context('../../assets/images/gallery/interior/ex/', true);
const sportInterior = require.context('../../assets/images/gallery/interior/sport/', true);
const lxInterior = require.context('../../assets/images/gallery/interior/lx/', true);

const touringArrExt = [],
  exlArrExt = [],
  exArrExt = [],
  sportArrExt = [],
  lxArrExt = []

const touringArrInter = [],
  exlArrInter = [],
  exArrInter = [],
  sportArrInter = [],
  lxArrInter = []

for (let i = 1; i <= 21; i++) {
  // Exterior
  let img = touringExterior(`./${i}.jpg`);
  let img1 = i <= 19 && exlExterior(`./${i}.jpg`);
  let img2 = i <= 15 && exExterior(`./${i}.jpg`);
  let img3 = i <= 11 && sportExterior(`./${i}.jpg`);
  let img4 = i <= 12 && lxExterior(`./${i}.jpg`);

  // Interior
  let img5 = i <= 15 && touringInterior(`./${i}.jpg`);
  let img6 = i <= 10 && exlInterior(`./${i}.jpg`);
  let img7 = i <= 10 && exInterior(`./${i}.jpg`);
  let img8 = i <= 10 && sportInterior(`./${i}.jpg`);
  let img9 = i <= 8 && lxInterior(`./${i}.jpg`);

  touringArrExt.push(img)
  exlArrExt.push(img1 && img1)
  exArrExt.push(img2 && img2)
  sportArrExt.push(img3 && img3)
  lxArrExt.push(img4 && img4)

  touringArrInter.push(img5)
  exlArrInter.push(img6 && img6)
  exArrInter.push(img7 && img7)
  sportArrInter.push(img8 && img8)
  lxArrInter.push(img9 && img9)
}

console.log(touringArrExt, exlArrExt, exArrExt, sportArrExt, lxArrExt)

export default {
  exterior: {
    touring: touringArrExt.filter(arr => arr !== false),
    exl: exlArrExt.filter(arr => arr !== false),
    ex: exArrExt.filter(arr => arr !== false),
    sport: sportArrExt.filter(arr => arr !== false),
    lx: lxArrExt.filter(arr => arr !== false),
  },
  interior: {
    touring: touringArrInter.filter(arr => arr !== false),
    exl: exlArrInter.filter(arr => arr !== false),
    ex: exArrInter.filter(arr => arr !== false),
    sport: sportArrInter.filter(arr => arr !== false),
    lx: lxArrInter.filter(arr => arr !== false),
  }
}