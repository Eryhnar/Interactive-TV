
const IMGSCREEN = document.getElementById("tvScreenOff");

const VIDSCREEN = document.getElementById("tvScreen");

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

function formatTime(time) {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
}

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
            programs: {
                program1: {
                    title: "Program 1",
                    startTime: formatTime(new Date(new Date().getTime() - 10*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 45*60000)),
                    description: "A show about stuff.",
                },
                program2: {
                    title: "Program 2",
                    startTime: formatTime(new Date(new Date().getTime() + 45*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 105*60000)),
                    description: "A show about other stuff.",
                },
                program3: {
                    title: "Program 3",
                    startTime: formatTime(new Date(new Date().getTime() + 140*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 195*60000)),
                    description: "A show about more stuff.",
                },
            },
            

        },
        channel2: {
            src: "./img/channel2.jpg",
            title: "Channel 2",
            programs: {
                program1: {
                    title: "Program 1",
                    startTime: formatTime(new Date(new Date().getTime() - 10*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 45*60000)),
                    description: "A show about stuff.",
                },
                program2: {
                    title: "Program 2",
                    startTime: formatTime(new Date(new Date().getTime() + 45*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 105*60000)),
                    description: "A show about other stuff.",
                },
                program3: {
                    title: "Program 3",
                    startTime: formatTime(new Date(new Date().getTime() + 140*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 195*60000)),
                    description: "A show about more stuff.",
                },
            },
        },
        // channel2: "./img/channel2.jpg",
        channel3: {
            src: "./img/channel3.jpg",
            title: "Channel 3",
            programs: {
                program1: {
                    title: "Program 1",
                    startTime: formatTime(new Date(new Date().getTime() - 10*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 45*60000)),
                    description: "A show about stuff.",
                },
                program2: {
                    title: "Program 2",
                    startTime: formatTime(new Date(new Date().getTime() + 45*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 105*60000)),
                    description: "A show about other stuff.",
                },
                program3: {
                    title: "Program 3",
                    startTime: formatTime(new Date(new Date().getTime() + 140*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 195*60000)),
                    description: "A show about more stuff.",
                },
            },
        },
        channel4: {
            src: "./img/channel4.jpg",
            title: "Channel 4",
            programs: {
                program1: {
                    title: "Program 1",
                    startTime: formatTime(new Date(new Date().getTime() - 10*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 45*60000)),
                    description: "A show about stuff.",
                },
                program2: {
                    title: "Program 2",
                    startTime: formatTime(new Date(new Date().getTime() + 45*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 105*60000)),
                    description: "A show about other stuff.",
                },
                program3: {
                    title: "Program 3",
                    startTime: formatTime(new Date(new Date().getTime() + 140*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 195*60000)),
                    description: "A show about more stuff.",
                },
            },
        },
        channel5: {
            src: "./img/channel5.jpg",
            title: "Channel 5",
            programs: {
                program1: {
                    title: "Program 1",
                    startTime: formatTime(new Date(new Date().getTime() - 10*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 45*60000)),
                    description: "A show about stuff.",
                },
                program2: {
                    title: "Program 2",
                    startTime: formatTime(new Date(new Date().getTime() + 45*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 105*60000)),
                    description: "A show about other stuff.",
                },
                program3: {
                    title: "Program 3",
                    startTime: formatTime(new Date(new Date().getTime() + 140*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 195*60000)),
                    description: "A show about more stuff.",
                },
            },
        },
        channel6: {
            src: "./img/channel6.jpg",
            title: "Channel 6",
            programs: {
                program1: {
                    title: "Program 1",
                    startTime: formatTime(new Date(new Date().getTime() - 10*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 45*60000)),
                    description: "A show about stuff.",
                },
                program2: {
                    title: "Program 2",
                    startTime: formatTime(new Date(new Date().getTime() + 45*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 105*60000)),
                    description: "A show about other stuff.",
                },
                program3: {
                    title: "Program 3",
                    startTime: formatTime(new Date(new Date().getTime() + 140*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 195*60000)),
                    description: "A show about more stuff.",
                },
            },
        },
        channel7: {
            src: "./img/channel7.jpg",
            title: "Channel 7",
            programs: {
                program1: {
                    title: "Program 1",
                    startTime: formatTime(new Date(new Date().getTime() - 10*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 45*60000)),
                    description: "A show about stuff.",
                },
                program2: {
                    title: "Program 2",
                    startTime: formatTime(new Date(new Date().getTime() + 45*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 105*60000)),
                    description: "A show about other stuff.",
                },
                program3: {
                    title: "Program 3",
                    startTime: formatTime(new Date(new Date().getTime() + 140*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 195*60000)),
                    description: "A show about more stuff.",
                },
            },
        },
        channel8: {
            src: "./img/channel8.jpg",
            title: "Channel 8",
            programs: {
                program1: {
                    title: "Program 1",
                    startTime: formatTime(new Date(new Date().getTime() - 10*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 45*60000)),
                    description: "A show about stuff.",
                },
                program2: {
                    title: "Program 2",
                    startTime: formatTime(new Date(new Date().getTime() + 45*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 105*60000)),
                    description: "A show about other stuff.",
                },
                program3: {
                    title: "Program 3",
                    startTime: formatTime(new Date(new Date().getTime() + 140*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 195*60000)),
                    description: "A show about more stuff.",
                },
            },
        },
        channel9: {
            src: "./img/channel9.jpg",
            title: "Channel 9",
            programs: {
                program1: {
                    title: "Program 1",
                    startTime: formatTime(new Date(new Date().getTime() - 10*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 45*60000)),
                    description: "A show about stuff.",
                },
                program2: {
                    title: "Program 2",
                    startTime: formatTime(new Date(new Date().getTime() + 45*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 105*60000)),
                    description: "A show about other stuff.",
                },
                program3: {
                    title: "Program 3",
                    startTime: formatTime(new Date(new Date().getTime() + 140*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 195*60000)),
                    description: "A show about more stuff.",
                },
            },
        },
        channel0: {
            src: "./img/channel0.jpg",
            title: "Channel 0",
            programs: {
                program1: {
                    title: "Program 1",
                    startTime: formatTime(new Date(new Date().getTime() - 10*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 45*60000)),
                    description: "A show about stuff.",
                },
                program2: {
                    title: "Program 2",
                    startTime: formatTime(new Date(new Date().getTime() + 45*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 105*60000)),
                    description: "A show about other stuff.",
                },
                program3: {
                    title: "Program 3",
                    startTime: formatTime(new Date(new Date().getTime() + 140*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 195*60000)),
                    description: "A show about more stuff.",
                },
            },
        },
        // channel3: "./img/channel3.jpg",
        // channel4: "./img/channel4.jpg",
        // channel5: "./img/channel5.jpg",
        // channel6: "./img/channel6.jpg",
        // channel7: "./img/channel7.jpg",
        // channel8: "./img/channel8.jpg",
        // channel9: "./img/channel9.jpg",
        // channel0: "./img/channel0.jpg",
    },

    changeChannel: function(channel) {
        if (this.power) {


            
            console.log(this.previousChannelId)
            console.log(channel)
            if (this.currentChannelId !== channel) {
                this.previousChannel = this.currentChannel;
                this.previousChannelId = this.currentChannelId;
                this.currentChannelId = channel;
                this.currentChannel = `./mov/${channel}.webm`;
            }
            VIDSCREEN.src = `./mov/${channel}.webm`;

        }
    },

    togglePower: function() {
        this.power = !this.power;
    },

    channelUp: function() {
        let channelKeys = Object.keys(this.channels);
        let currentIndex = channelKeys.indexOf(this.currentChannelId);
        let nextIndex = currentIndex === channelKeys.length - 1 ? 0 : currentIndex + 1;
        channel = channelKeys[nextIndex];
        this.changeChannel(channel);
    },

    channelDown: function() {
        let channelKeys = Object.keys(this.channels);
        let currentIndex = channelKeys.indexOf(this.currentChannelId);
        let nextIndex = currentIndex === 0 ? channelKeys.length : currentIndex - 1;
        channel = channelKeys[nextIndex];
        this.changeChannel(channel);
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
        document.getElementById("channelIdArea").value = this.currentChannel;
        document.getElementById("channelIdArea").innerText = this.currentChannelId;
        document.getElementById("timeTagArea").innerText = `${this.hour}:${this.minutes}`;
        
        let currentPrograms = Object.values(this.channels[this.currentChannelId].programs);

        let programCards = currentPrograms.map(program => {
            // console.log(program);  
            
            return `
                <div class="programCard">
                    <div class="programTitle">${program.title}</div>
                    <div class="programTime">${program.startTime} - ${program.endTime}</div>
                </div>
            `;

        }).join('');

        document.getElementById('infoAreaRow2').innerHTML = programCards;
        // console.log(programCards);
    },

}


// need to fix this mess
document.getElementById("powerButton").addEventListener("click", () => {
    appState.togglePower();
    if (appState.power) {
        document.getElementById("pilotLight").classList.remove("pilotLightOff");//add to togglePower
        document.getElementById("pilotLight").classList.add("pilotLightOn");//add to togglePower
            if (appState.previousChannel) {
                document.getElementById("tvScreenOff").classList.add("hidden");
                document.getElementById("tvScreen").classList.remove("hidden");
                VIDSCREEN.src = appState.previousChannel;
            } else {
                document.getElementById("tvScreenOff").classList.add("hidden");
                document.getElementById("tvScreen").classList.remove("hidden");
                VIDSCREEN.src = "./mov/default.mp4";
            }
    } else {
        document.getElementById("pilotLight").classList.remove("pilotLightOn");//add to togglePower
        document.getElementById("pilotLight").classList.add("pilotLightOff");//add to togglePower
        
        appState.previousChannel = VIDSCREEN.src;
        
        document.getElementById("tvScreen").classList.add("hidden");
        document.getElementById("tvScreen").pause();
        document.getElementById("tvScreenOff").classList.remove("hidden");
        // IMGSCREEN.src = "./img/off.jpg";

        OVERLAYS.map((overlay) => {overlay.classList.add("hidden");});
    }
});


numBtns.map((btn) => {
    
    btn.addEventListener("click", (e) => {
        buttonNumber = e.target.id.slice(-1);
        channel = `channel${buttonNumber}`
        appState.changeChannel(channel);
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
            let tempChannel = appState.currentChannel; 
            // console.log(appState.previousChannel);
            // console.log(tempChannel);
            appState.currentChannel = appState.previousChannel; 
            // console.log(appState.currentChannel);
            appState.previousChannel = tempChannel; 
            // console.log(appState.previousChannel);
            VIDSCREEN.src = appState.currentChannel; 
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
    // console.log(appState.power, appState.currentChannel)
    if(appState.power && appState.currentChannel) {
        
        appState.showMenu();

    }

});