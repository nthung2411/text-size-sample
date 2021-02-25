Ionic 5 Sample with Capacitor

# Setup
- `ionic start ionic-sample blank --capacitor`
- `cd ionic-sample`
- `ionic integrations enable capacitor`
- `npx cap init "Text Size Sample" io.robert.sample`
- `ionic build --prod`

# Android
- `npx cap add android`
- `npx cap open android`

# iOS
- `npx cap add ios`
- `npx cap open ios`

## issue: 
1.extensions required
- `sudo gem pristine ffi --version 1.12.2`

## xcode-select
### without XCode Application installed
- `xcode-select --install`
- `sudo xcode-select --switch /Library/Developer/CommandLineTools`

### with XCode Application installed
- `sudo xcode-select -s /Applications/Xcode.app/Contents/Developer`

# How to apply Cordova plugins with Capacitor(https://capacitorjs.com/docs/cordova/using-cordova-plugins)
## Determining Installed Plugin Version
- `npx cap ls`

## Installing Ionic Native Plugins
- `npm install @ionic-native/javascript-package-name`
- `npm install cordova-plugin-name`
- `npx cap sync`

## Updating Ionic Native Plugins
- `npm install @ionic-native/javascript-package-name@latest`
- `npm install cordova-plugin-name@latest`
- `npx cap update`