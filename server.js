//nõuame seda supereheroes paketti,mida tõmbasime
//let superheroes = require("superheroes");
//see on omadus ja tema meetod
//console.log(superheroes.all);
//loome uue muutuja randomhero ja proovime console.logiga kuvada
//console.log(superheroes.random());
//foraech t;;tab ainult massiiviga
//superheroes.all.forEach(hero => {
   // console.log(hero);
   
//});

const supervillains = require("supervillains");
//console.log(supervillains.all);
//console.log(supervillains.random());
const supereheroes = require("superheroes");
console.log(supervillains.random());

supervillains.all.forEach(supervillain = > {
    console.log(supervillains.random());
})

console.log(ˋ${superheroes.random()} fights ${supervillains.random()}ˋ);




