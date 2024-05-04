# Author: Pradeep Kumar Behera

# Date: Apr 28 2024

# Purpose: Construct & configure Mobile Automation

# Wdio Project Configuration:-

- $ npm init wdio@latest .

Installing @wdio/cli to initialize project...
✔ Success!

- ===============================
- 🤖 WDIO Configuration Wizard 🧙
- ===============================

- ? A project named "ts-mobile-wdio" was detected at "/home/pradeep/workstation/Appium/- - ts-mobile-wdio", correct? Yes
- ? What type of testing would you like to do? E2E Testing - of Web or Mobile Applications
- ? Where is your automation backend located? On my local machine
- ? Which environment you would like to automate? Mobile - native, hybrid and mobile web apps, on Android or iOS
- ? Which mobile environment you'ld like to automate? Android - native, hybrid and mobile web apps, tested on emulators
  and real devices > using UiAutomator2 (https://www.npmjs.com/package/appium-uiautomator2-driver)
- ? Which framework do you want to use? Mocha (https://mochajs.org/)
- ? Do you want to use a compiler? TypeScript (https://www.typescriptlang.org/)
- ? Do you want WebdriverIO to autogenerate some test files? Yes
- ? What should be the location of your spec files? /home/pradeep/workstation/Appium/ts-mobile-wdio/test/specs/\*\*/\*.ts
- ? Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? Yes
- ? Where are your page objects located? /home/pradeep/workstation/Appium/ts-mobile-wdio/test/pageobjects/\*\*/\*.ts
- ? Which reporter do you want to use? allure
- ? Do you want to add a plugin to your test setup?
- ? Would you like to include Visual Testing to your setup? For more information see
  https://webdriver.io/docs/visual-testing! No
- ? Do you want to add a service to your test setup? appium
- ? Do you want me to run `npm install` Yes

# Pre-requsite

- Node Version-XX.XX LTS
- Android Studio
- Emulator Up & Running
- Appium Services & Appium Doctor

# How to Start Appium echoSystem for Testing

    - Start Emulator using Android Studio
    - pradeep@pradeep:~$ cd /usr/local/android-studio/bin/
    - pradeep@pradeep:/usr/local/android-studio/bin$ sh studio.sh

# Start Emulator using Android Virtual Device

# Start Appium inspector

pradeep@pradeep:~/workstation/Appium/Support/tools$ ./Appium-Inspector-linux-2023.2.1.AppImage
libva error: vaGetDriverNameByIndex() failed with unknown libva error, driver_name = (null)
Opening in existing browser session.
Add Capabilities
{
platformName: "Android",
"appium:deviceName": "OPPO CPH2373",
"appium:automationName": "UIAutomator2",
"appium:app": path.join(
process.cwd(),
"./app/android/ApiDemos-debug.apk"
),
"appium:ensureWebviewsHavePages": true,
"appium:nativeWebScreenshot": true,
"appium:newCommandTimeout": 3600,
"appium:connectHardwareKeyboard": true,
"appium:ignoreHiddenApiPolicyError": true,
}

# Start Appium Server

/workstation/Appium/Support/tools$ appium -p 4724 --allow-cors
[Appium] Welcome to Appium v2.0.0-beta.63 (REV 3fea5493a431ac64470d4230d4b51438cf213bd1)
[Appium] Non-default server args:
[Appium] {
[Appium] allowCors: true,
[Appium] port: 3724
[Appium] }
[Appium] Attempting to load driver uiautomator2...
[debug] [Appium] Requiring driver at /home/pradeep/.appium/node_modules/appium-uiautomator2-driver
[Appium] You have enabled CORS requests from any host. Be careful not to visit sites which could maliciously try to start Appium sessions on your machine
[Appium] Appium REST http interface listener started on 0.0.0.0:3724
[Appium] Available drivers:
[Appium] - uiautomator2@2.14.0 (automationName 'UiAutomator2')
[Appium] No plugins have been installed. Use the "appium plugin" command to install the one(s) you want to use.

# Error Resolve

- https://github.com/appium/appium/issues/16919
- https://stackoverflow.com/questions/75471228/error-ts-node-esm-transpile-only-resolve-did-not-call-the-next-hook-in-its
- https://stackoverflow.com/questions/24755341/unable-to-get-android-permission-clear-app-user-data

[AppDetails]

- https://support.testsigma.com/support/solutions/articles/32000019977-how-to-find-app-package-and-app-activity-of-your-android-app

[Linux]
$ adb devices
$ adb shell dumpsys window | grep -E 'mCurrentFocus'

[Error clear-app-user-data] -https://stackoverflow.com/questions/24755341/unable-to-get-android-permission-clear-app-user-data
