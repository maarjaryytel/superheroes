//nõuame seda supereheroes paketti,mida tõmbasime
let superheroes = require("superheroes");

//see on omadus ja tema meetod
//console.log(superheroes.all);

//loome uue muutuja randomhero ja proovime console.logiga kuvada
console.log(superheroes.random());
superheroes.all.forEach(hero => {
    console.log(hero);
});
