let power = false;

const screen = document.getElementById('tvScreen');

const numBtns = [
    document.getElementById('button1'),
    document.getElementById('button2'),
    document.getElementById('button3'),
    document.getElementById('button4'),
    document.getElementById('button5'),
    document.getElementById('button6'),
    document.getElementById('button7'),
    document.getElementById('button8'),
    document.getElementById('button9'),
    document.getElementById('button0'),
  ];

// document.getElementById('powerButton').addEventListener('click', () => {
//     power = !power;
//     screen.src = power ? "./img/default.jpg" : "./img/off.jpg";
//     console.log(power);
// });


document.getElementById('powerButton').addEventListener('click', () => {
    power = !power;
    console.log(power);
    if (power) {
        document.getElementById("pilotLight").classList.remove("pilotLightOff");
        document.getElementById("pilotLight").classList.add("pilotLightOn");
        screen.src = "./img/default.jpg";
        console.log(document.getElementById("pilotLight").classList);
    } else {
        document.getElementById("pilotLight").classList.remove("pilotLightOn");
        document.getElementById("pilotLight").classList.add("pilotLightOff");
        screen.src = "./img/off.jpg";
        console.log(document.getElementById("pilotLight").classList);
    }
});



numBtns.map(
    (btn) => btn.addEventListener('click', () => {
        if (power) {
            screen.src = "./img/default.jpg";
        }
    })
);


document.getElementById("piloto").addEventListener("click", (evento) => {
    if (power) {
        screen.classList.remove("pilotoOff");
        screen.classList.add("pilotoOn");       
    }
})