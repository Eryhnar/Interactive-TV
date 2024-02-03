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

let channels = {
    channel1: "./img/channel1.jpg",
    channel2: "./img/channel2.jpg",
    channel3: "./img/channel3.jpg",
    channel4: "./img/channel4.jpg",
    channel5: "./img/channel5.jpg",
    channel6: "./img/channel6.jpg",
    channel7: "./img/channel7.jpg",
    channel8: "./img/channel8.jpg",
    channel9: "./img/channel9.jpg",
    channel0: "./img/channel0.jpg",
};



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
        
        previousChannel = SCREEN.src;
        
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
                previousChannel = `./img/channel${buttonNumber}.jpg`;
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

document.getElementById("backChannelButton").addEventListener("click", () => {
    if (power) {
        if (previousChannel) {
            let currentChannel = SCREEN.src;           
            SCREEN.src = previousChannel;
            previousChannel = currentChannel;
        }
    }
});


document.getElementById("channelUpButton").addEventListener("click", (e) => {
    
});