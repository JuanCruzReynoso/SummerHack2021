let dameRandom = (min, max) => {
    let random = Math.round(Math.random() * (max - min) + min);
    return random;
}

let tiradas = 0;

let jugar = () =>{
    tiradas++;
    console.log(random)
}