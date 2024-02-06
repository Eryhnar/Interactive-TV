
const IMGSCREEN = document.getElementById("tvScreenOff");

const VIDSCREEN = document.getElementById("tvScreen");

const OVERLAYS = Array.from(document.getElementsByClassName("overlay"));

let DATE = new Date();

let volumeDisplayTimeout;


// this should probably be in appState
const numBtns = [
    document.getElementsByClassName("button1"),
    document.getElementsByClassName("button2"),
    document.getElementsByClassName("button3"),
    document.getElementsByClassName("button4"),
    document.getElementsByClassName("button5"),
    document.getElementsByClassName("button6"),
    document.getElementsByClassName("button7"),
    document.getElementsByClassName("button8"),
    document.getElementsByClassName("button9"),
    document.getElementsByClassName("button0"),
  ];
// console.log(numBtns);
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

    volume: 100,

    currentChannelId: null,

    currentChannel: null,
    
    previousChannelId: null,

    previousChannel: null,

    date: DATE,

    hour: DATE.getHours(),

    minutes: DATE.getMinutes(),

    channels: {
        channel1: {
            src: "./mov/channel1.webm",
            title: "Channel 1",
            programs: {
                program1: {
                    title: "The Good Place",
                    startTime: formatTime(new Date(new Date().getTime() - 10*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 45*60000)),
                    description: "Four people and their otherworldly frienemy struggle in the afterlife to define what it means to be good. Eleanor finds herself in the good place- heaven, created by the immortal architect Michael, but doesn't believe she belongs.",
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
            src: "./mov/channel2.webm",
            title: "Channel 2",
            programs: {
                program1: {
                    title: "Game of Thrones",
                    startTime: formatTime(new Date(new Date().getTime() - 10*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 45*60000)),
                    description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for a millennia.",
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
            src: "./mov/channel3.webm",
            title: "Channel 3",
            programs: {
                program1: {
                    title: "Friends",
                    startTime: formatTime(new Date(new Date().getTime() - 10*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 45*60000)),
                    description: "Friends follows the personal and professional lives of six twenty to thirty year-old friends living in the Manhattan borough of New York City.",
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
            src: "./mov/channel4.webm",
            title: "Channel 4",
            programs: {
                program1: {
                    title: "Westworld",
                    startTime: formatTime(new Date(new Date().getTime() - 10*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 45*60000)),
                    description: "At the intersection of the near future and the reimagined past, waits a world in which every human appetite can be indulged without consequence.",
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
            src: "./mov/channel5.webm",
            title: "Channel 5",
            programs: {
                program1: {
                    title: "Firefly",
                    startTime: formatTime(new Date(new Date().getTime() - 10*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 45*60000)),
                    description: "Five hundred years in the future, a renegade crew aboard a small spacecraft tries to survive as they travel the unknown parts of the galaxy and evade warring factions as well as authority agents out to get them.",
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
            src: "./mov/channel6.webm",
            title: "Channel 6",
            programs: {
                program1: {
                    title: "Chuck",
                    startTime: formatTime(new Date(new Date().getTime() - 10*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 45*60000)),
                    description: "When a computer geek inadvertently downloads critical government secrets into his brain, both the CIA and the NSA assign an agent to protect him and exploit his newfound skills.",
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
            src: "./mov/channel7.webm",
            title: "Channel 7",
            programs: {
                program1: {
                    title: "The Office (US)",
                    startTime: formatTime(new Date(new Date().getTime() - 10*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 45*60000)),
                    description: "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
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
            src: "./mov/channel8.webm",
            title: "Channel 8",
            programs: {
                program1: {
                    title: "How I Met Your Mother",
                    startTime: formatTime(new Date(new Date().getTime() - 10*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 45*60000)),
                    description: "A father recounts to his children - through a series of flashbacks - the journey he and his four best friends took leading up to him meeting their mother.",
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
            src: "./mov/channel9.webm",
            title: "Channel 9",
            programs: {
                program1: {
                    title: "The Big Bang Theory",
                    startTime: formatTime(new Date(new Date().getTime() - 10*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 45*60000)),
                    description: "A woman who moves into an apartment across the hall from two brilliant but socially awkward physicists shows them how little they know about life outside of the laboratory.",
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
            src: "./mov/channel0.webm",
            title: "Channel 0",
            programs: {
                program1: {
                    title: "Breaking Bad",
                    startTime: formatTime(new Date(new Date().getTime() - 10*60000)),
                    endTime: formatTime(new Date(new Date().getTime() + 45*60000)),
                    description: "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
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
    },

    changeChannel: function(channel) {
        if (this.power) {


            
            // console.log(this.previousChannelId)
            // console.log(channel)
            if (this.currentChannelId !== channel) {
                this.previousChannel = this.currentChannel;
                this.previousChannelId = this.currentChannelId;
                this.currentChannelId = channel;
                this.currentChannel = this.channels[channel].src;
            }
            VIDSCREEN.src = this.channels[channel].src;
            // console.log(this.channels[channel].src)
            if (!document.getElementById("programInfoArea").classList.contains("hidden")) {
                this.showInfo(true); //this is probably not the best way to do this
            }
        }
    },

    togglePower: function() {
        this.power = !this.power;
    },

    channelUp: function() {
        let channelKeys = Object.keys(this.channels);
        let currentIndex = channelKeys.indexOf(this.currentChannelId);
        let nextIndex = currentIndex === channelKeys.length - 1 ? 0 : currentIndex + 1;
        let channel = channelKeys[nextIndex];// changed channel to let channel. I do not know why it was working before.
        this.changeChannel(channel);
    },

    channelDown: function() {
        let channelKeys = Object.keys(this.channels);
        let currentIndex = channelKeys.indexOf(this.currentChannelId);
        let nextIndex = currentIndex === 0 ? channelKeys.length - 1 : currentIndex - 1;
        let channel = channelKeys[nextIndex];// changed channel to let channel. I do not know why it was working before.
        this.changeChannel(channel);
    },

    volumeUp: function() {
        if (this.power && this.volume < 100) {

            if (VIDSCREEN.muted) {
                this.mute();
                clearTimeout(volumeDisplayTimeout);
                this.volume += 10;
                VIDSCREEN.volume = this.volume / 100;
                document.getElementById("volumeDisplay").classList.remove("hidden");
                document.getElementById("volumeLevel").style.height = `${this.volume}%`;
                volumeDisplayTimeout = setTimeout(() => {
                    volumeDisplay.classList.add("hidden");
                }, 3000);
            } else {
                clearTimeout(volumeDisplayTimeout);
                this.volume += 10;
                VIDSCREEN.volume = this.volume / 100;
                document.getElementById("volumeDisplay").classList.remove("hidden");
                document.getElementById("volumeLevel").style.height = `${this.volume}%`;
                volumeDisplayTimeout = setTimeout(() => {
                    volumeDisplay.classList.add("hidden");
                }, 3000);
            }

        }
    },

    volumeDown: function() {
        if (this.power && this.volume > 0) {

            if (VIDSCREEN.muted) {
                this.mute();
                clearTimeout(volumeDisplayTimeout);
                this.volume -= 10;
                VIDSCREEN.volume = this.volume / 100;
                document.getElementById("volumeDisplay").classList.remove("hidden");
                document.getElementById("volumeLevel").style.height = `${this.volume}%`;
                volumeDisplayTimeout = setTimeout(() => {
                    volumeDisplay.classList.add("hidden");
                }, 3000);
            } else {
                clearTimeout(volumeDisplayTimeout);
                this.volume -= 10;
                VIDSCREEN.volume = this.volume / 100;
                document.getElementById("volumeDisplay").classList.remove("hidden");
                document.getElementById("volumeLevel").style.height = `${this.volume}%`;
                volumeDisplayTimeout = setTimeout(() => {
                    volumeDisplay.classList.add("hidden");
                }, 3000);
            }

        }
    },

    mute: function() {
        VIDSCREEN.muted = !VIDSCREEN.muted;
        document.getElementById("muteArea").classList.toggle("hidden");
    },

    showInfo: function(bool) {

        if (!bool) {
            document.getElementById("programInfoArea").classList.toggle("hidden");
        }
        // document.getElementById("programInfoArea").classList.toggle("hidden");
        document.getElementById("channelIdArea").value = this.currentChannel;
        document.getElementById("channelIdArea").innerText = this.currentChannelId;
        document.getElementById("timeTagArea").innerText = formatTime(this.date);
        // document.getElementById("timeTagArea").innerText = `${this.hour}:${this.minutes}`;
        
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

        document.getElementById("descArea").innerText = currentPrograms[0].description; //this will need to be modified to show the current program
    },

    showMenu: function() {
        document.getElementById("menuArea").classList.toggle("hidden");
        
    },


}

let channels = Object.keys(appState.channels);


channels.map((channel) => {
    let keys = Object.keys(appState.channels);
    let index = keys.indexOf(channel)
    let newIndex = index == 9 ? 0 : index+1;
    // let index = keys.indexOf(channel); 
    // console.log(index);
    document.getElementById("menuArea").innerHTML += `<div class="button${newIndex}" id="${channel}">${appState.channels[channel].title}</div>`;
    // console.log(channel);
    // console.log(appState.channels[channel].title);
    // console.log(document.getElementById(channel).classList)
});

numBtns.forEach((btnCollection) => {
    Array.from(btnCollection).forEach((btn) => {
        btn.addEventListener("click", (e) => {
            let buttonClass = Array.from(e.target.classList).find(cls => cls.startsWith('button') && cls.length > 6);
            buttonNumber = buttonClass.slice(-1);
            // let buttonNumber = e.target.id.slice(-1);
            let channel = `channel${buttonNumber}`;
            appState.changeChannel(channel);
        });
    });
});


// need to fix this mess. Maybe migrate to appState.togglePower
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
        
        if (VIDSCREEN.muted) {
            appState.mute();
        }
    }
});



// numBtns.map((btn) => {
    
//     btn.addEventListener("click", (e) => {
//         buttonNumber = e.target.id.slice(-1);
//         channel = `channel${buttonNumber}`
//         appState.changeChannel(channel);
//     });
    
// });

document.getElementById("muteButton").addEventListener("click", () => {
    if (appState.power) {
        
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
        
        appState.showInfo();

    }

});

document.getElementById("menuButton").addEventListener("click", (e) => {
    if(appState.power) {
        appState.showMenu();
    }
});