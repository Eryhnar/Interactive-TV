
const SCREEN = document.getElementById("tvScreen");

const OVERLAYS = Array.from(document.getElementsByClassName("overlay"));

let DATE = new Date();

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

    currentChannelId: null,

    currentChannel: null,
    
    previousChannelId: null,

    previousChannel: null,

    date: DATE,

    hour: DATE.getHours(),

    minutes: DATE.getMinutes(),

    channels: {
        channel1: {
            src: "./img/channel1.jpg",
            title: "Channel 1",
            // program1: {
            //     title: "Program 1",
            //     startTime: new Date(new Date().getTime() - 10*60000),
            //     endTime: new Date(startTime.getTime() + 45*60000),
            //     description: "A show about stuff.",
            // },
            // program2: {
            //     title: "Program 2",
            //     startTime: new Date(program1.endTime.getTime()),
            //     endTime: new Date(program2.startTime.getTime() + 30*60000),
            //     description: "A show about other stuff.",
            // },
            // program3: {
            //     title: "Program 3",
            //     startTime: new Date(program2.endTime.getTime()),
            //     endTime: new Date(program3.startTime.getTime() + 60*60000),
            //     description: "A show about more stuff.",
            // },

        },
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
    },

    showMenu: function() {
        document.getElementById("programInfoArea").classList.toggle("hidden");
        // console.log(document.getElementById("programInfoArea").classList);
        document.getElementById("channelIdArea").value = this.currentChannel;
    },

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

// && appState.previousChannel != `.img/channel${buttonNumber}.jpg`

numBtns.map((btn) => {
    
    btn.addEventListener("click", (e) => {
        if (appState.power) {
            // screen.classList.remove(screen.classList[screen.classList.length - 1])
            let buttonNumber = e.target.id.slice(-1);
            if (appState.previousChannel) {
                appState.previousChannel = appState.currentChannel;
                appState.previousChannelId = appState.currentChannelId;
                appState.currentChannel = `./img/channel${buttonNumber}.jpg`;
                appState.currentChannelId = `channel${buttonNumber}`;
                // console.log(appState.previousChannelId);
                // console.log(appState.currentChannelId);
                // console.log("previous channel")
            } else {
                appState.previousChannel = `./img/channel${buttonNumber}.jpg`;
                appState.previousChannelId = `channel${buttonNumber}`;
                appState.currentChannel = `./img/channel${buttonNumber}.jpg`;
                appState.currentChannelId = `channel${buttonNumber}`;
                // console.log("no previous channel")
                // console.log(appState.previousChannelId);
                // console.log(appState.currentChannelId);
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

document.getElementById("infoButton").addEventListener("click", (e) => {
    
    // console.log("click");
    // e.target.classList.toggle("hidden");
    console.log(appState.power, appState.currentChannel)
    if(appState.power && appState.currentChannel) {
        
        appState.showMenu();

    }

});