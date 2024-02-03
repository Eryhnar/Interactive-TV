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

document.getElementById('powerButton').addEventListener('click', () => {
    power = !power;
    // screen.src = power ? "./img/default.jpg" : "./img/off.jpg";
    console.log(power);
});



numBtns.map(
    (btn) => btn.addEventListener('click', () => {
        if (power) {
            screen.src = "./img/default.jpg";
        }
    })
);
