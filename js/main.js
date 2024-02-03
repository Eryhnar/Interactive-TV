let power = false;

const SCREEN = document.getElementById("tvScreen");

let previousChannel

const numBtns = [
    document.getElementById("button1"),
    document.getElementById("button2"),
    document.getElementById("button3"),
    document.getElementById("button4"),
    document.getElementById("button5"),
    document.getElementById("button6"),
    document.getElementById("button7"),
    document.getElementById("button8"),
    document.getElementById("button9"),
    document.getElementById("button0"),
  ];

// document.getElementById('powerButton').addEventListener('click', () => {
//     power = !power;
//     screen.src = power ? "./img/default.jpg" : "./img/off.jpg";
//     console.log(power);
// });


document.getElementById("powerButton").addEventListener("click", () => {
    power = !power;
    if (power) {
        document.getElementById("pilotLight").classList.remove("pilotLightOff");
        document.getElementById("pilotLight").classList.add("pilotLightOn");
            if (previousChannel) {
                SCREEN.src = previousChannel;
            } else {
                SCREEN.src = "./img/default.jpg";
            }
    } else {
        document.getElementById("pilotLight").classList.remove("pilotLightOn");
        document.getElementById("pilotLight").classList.add("pilotLightOff");
        SCREEN.src = "./img/off.jpg";
    }
});



numBtns.map((btn) => {
    
    btn.addEventListener("click", (e) => {
        if (power) {
            // screen.classList.remove(screen.classList[screen.classList.length - 1])
            let buttonNumber = e.target.id.slice(-1);
            if (previousChannel) {
                previousChannel = SCREEN.src;
            } else {
                previousChannel = `./img/channel${buttonNumber}.jpg`
            }
            SCREEN.src = `./img/channel${buttonNumber}.jpg`;
        }
    });
    
});

document.getElementById("muteButton").addEventListener("click", () => {
    if (power) {
        document.getElementById("muteArea").classList.toggle("hidden");
        // volume mute to be implemented here
    }
});


