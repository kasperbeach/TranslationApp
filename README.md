# TranslationApp


## Getting Started

* After cloning the repo please download the api.env from discord
* Place it in the Application folder
* You need to open the Application folder in VS Code (or something similar) and rename api.env to just *.env*
* Open app.js and add a space or new line or something and save the file

### Prerequisites

In order for everything to run properly you need

* Node.js
* Python2
* Java SE (8+)
* Android SDK

If you dont have any of these or you arent sure if you do then please visit the [React Native getting started](https://facebook.github.io/react-native/docs/getting-started.html) guide. Be sure to click the "Building Projects with Native Code" tab and select Windows and Android underneath.

If you have everything then you can simply run
```
npm install -g react-native-cli
```
in cmd

## Running the App

First you need to install the npm packages
(you can open a terminal in vs code using ctrl+`)

```
npm i
```

Get either an emulator running or plug your phone into your computer.

then you can start the app, it will open automatically in whatever is available (emulator or real phone)

```
react-native run-android
```

This will open another cmd prompt, leave that one open for aslong as you are developing

### Extras

if you're developing anything to do with the server you can run that using

```
start node server.js
```
