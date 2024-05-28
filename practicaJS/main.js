let random = (min, max) =>{
    let random = Math.round(Math.random() * (max - min) + min);
    return random;
}

let cartas = ["Satan", "Diablo", "Demonio", "Vampiros", "Zombie", "Parca"];
//let numero = random(0,5);
//console.log(cartas[numero]);

var partidas = 0;

let jugar = ()=>{
    partidas++;
    console.log(cartas(random(0,5)));
    if(partidas < 3)
    {
        jugar();
    }
}

jugar();