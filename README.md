# Interactive TV

This is a web project made for an FSD bootcamp at Geekshubs academy. This was made over the course of one week. The information on the panels is dynamically updated and some of it is already interactive with the rest being currently worked on.

## Index

- [Stack](#stack)
- [Features](#features)
- [Live Deployment](#live-deployment)
- [Installation](#installation)
- [Author](#author)
- [Roadmap](#roadmap)
- [Known Issues](#known-issues)

## Stack 

![Static Badge](https://img.shields.io/badge/CSS-blue)
![Static Badge](https://img.shields.io/badge/HTML-red)
![Static Badge](https://img.shields.io/badge/JavaScript-yellow)



## Features 

- **Dynamic led lights:** The remote and the TV both have leds that indicate the state of the TV.
- **Interactible and animated buttons:** All buttons are animated. Most buttons are interactible, the exceptions being src and the navigation buttons (see roadmap).
- **Channel memory:** The TV saves in memory the current and last channel, enabling the back button functionality and returning to the last watched channel after turning the TV back on.
- **Info panel:** The info button displays information about the current channel like current and upcoming programs with their times and a description as well as current time.
- **Menu** Menu button displays the full list of channels dynamically. They are currently interactible via click/touch.
- **Fully functional volume controls** The volume and mute buttons are fully functional and have an on-sreen display to show their status.


## Live Deployment 

Check out the website at:

> [https://eryhnar.github.io/Interactive-TV/](https://eryhnar.github.io/Interactive-TV/)

## Installation 

You can clone the repository at:

```sh
git clone https://github.com/Eryhnar/Interactive-TV.git
```


## Author 

- **Pedro Fernández** - Project Developer
  - [GitHub](https://github.com/Eryhnar) - [LinkedIn](https://www.linkedin.com/in/pedro-fernandez-bel-68a2b9155/)

## Roadmap 

- **Responsive design** - The responsive design is currently being worked on and partially implemented. Eventually it will adapt fluidly to landscape screens and be displayed horizontally as well on phones.

- **Navigation functionality** - Add navigation functionality to the menu and info panels to interact with them from the remote, being able to change from the different program descriptions in the case of the info panel.

- **Apps screen** - An app screen is planned. This will allow you to browse several streaming apps and watch some trailers for their shows via embeded videos.

- **Animations** - An animation for tv on/off is planned.

- **Refactoring of some of the code for simplification** - Some of the code is currently sub-optimal and will be refactored soon.

- **Parental control settings** - A toggle for parental control will be implemented to block access to certain channels.

## Known Issues

- Responsiveness is only partially implemented.
- The remote buttons currently have some unintended trim in some situations.
- The buttons are sometimes unresponsive when clicked. Being investigated.
- Some of the videos displayed in some channels have white margins. This is was accidentally introduced when editting them and is not an screen issue. Will be removed.