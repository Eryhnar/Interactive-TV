
const SCREEN = document.getElementById("tvScreen");

const OVERLAYS = Array.from(document.getElementsByClassName("overlay"));

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

const appState = {

    power: false,

    volume: 0,

    currentChannel: null,

    previousChannel: null,

    channels: {
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
    },

    changeChannel: function(channel) {
        this.currentChannel = channel;
        this.previousChannel = SCREEN.src;
        SCREEN.src = this.channels[channel];
    },

    togglePower: function() {
        this.power = !this.power;
    },

    channelUp: function() {
        let channelKeys = Object.keys(this.channels);
        let currentIndex = channelKeys.indexOf(this.currentChannel);
        if (currentIndex === channelKeys.length - 1) {
            this.changeChannel(channelKeys[0]);
        } else {
            this.changeChannel(channelKeys[currentIndex + 1]);
        }
    },
    
    channelDown: function() {
        let channelKeys = Object.keys(this.channels);
        let currentIndex = channelKeys.indexOf(this.currentChannel);
        if (currentIndex === 0) {
            this.changeChannel(channelKeys[channelKeys.length - 1]);
        } else {
            this.changeChannel(channelKeys[currentIndex - 1]);
        }
    },

    volumeUp: function() {
        if (this.volume < 100) {
            this.volume += 10;
        }
    },

    volumeDown: function() {
        if (this.volume > 0) {
            this.volume -= 10;
        }
    },

    mute: function() {
        this.volume = 0;
    }

}

document.getElementById("powerButton").addEventListener("click", () => {
    appState.togglePower();
    if (appState.power) {
        document.getElementById("pilotLight").classList.remove("pilotLightOff");
        document.getElementById("pilotLight").classList.add("pilotLightOn");
        // OVERLAYS.map((overlay) => {overlay.classList.remove("hidden");});
            if (appState.previousChannel) {
                SCREEN.src = appState.previousChannel;
            } else {
                SCREEN.src = "./img/default.jpg";
            }
    } else {
        document.getElementById("pilotLight").classList.remove("pilotLightOn");
        document.getElementById("pilotLight").classList.add("pilotLightOff");
        
        appState.previousChannel = SCREEN.src;
        
        SCREEN.src = "./img/off.jpg";

        OVERLAYS.map((overlay) => {overlay.classList.add("hidden");});
    }
});



numBtns.map((btn) => {
    
    btn.addEventListener("click", (e) => {
        if (appState.power) {
            // screen.classList.remove(screen.classList[screen.classList.length - 1])
            let buttonNumber = e.target.id.slice(-1);
            if (appState.previousChannel) {
                appState.previousChannel = SCREEN.src;
            } else {
                appState.previousChannel = `./img/channel${buttonNumber}.jpg`;
            }
            SCREEN.src = `./img/channel${buttonNumber}.jpg`;
        }
    });
    
});

document.getElementById("muteButton").addEventListener("click", () => {
    if (appState.power) {
        document.getElementById("muteArea").classList.toggle("hidden");
        appState.mute();
    }
});

document.getElementById("backChannelButton").addEventListener("click", () => {
    if (appState.power) {
        if (appState.previousChannel) {
            appState.currentChannel = SCREEN.src;           
            SCREEN.src = appState.previousChannel;
            appState.previousChannel = appState.currentChannel;
        }
    }
});


document.getElementById("channelUpButton").addEventListener("click", (e) => {appState.channelUp();});

document.getElementById("channelDownButton").addEventListener("click", (e) => {appState.channelDown();});

document.getElementById("volUpButton").addEventListener("click", (e) => {appState.volumeUp();});

document.getElementById("volDownButton").addEventListener("click", (e) => {appState.volumeDown();});