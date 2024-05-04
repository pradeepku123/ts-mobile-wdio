import { SELECTOR } from "../helpers/locaters.ts";
describe("BMS Device Under Test", () => {
  beforeEach(async () => {
    await driver.activateApp("com.bt.bms");
  });
  afterEach(async () => {
    driver.terminateApp("com.bt.bms");
  });
  xit("Verify Landing Page.", async () => {
    const titleHeaderMain = await driver
      .$("id=com.bt.bms:id/title_header_main")
      .getText();
    await expect(titleHeaderMain).toEqual("It All Starts Here!");
  });
  xit("Verify M-Ticket Should be selected By default", async () => {
    await driver
      .$(
        `//android.widget.TextView[@resource-id="com.bt.bms:id/lblProfile" and @text="Profile"]`
      )
      .click();
    await driver
      .$(`//android.widget.TextView[@text="Accounts & Settings"]`)
      .click();
    const isSelected = await driver
      .$(
        `//androidx.recyclerview.widget.RecyclerView[@resource-id="com.bt.bms:id/rv_settings_menu"]/android.widget.LinearLayout[5]/android.widget.RadioButton
`
      )
      .getAttribute("checked");
    expect(isSelected).toBe("true");
  });
  it("Verifying Logout from BMS application", async () => {
    await driver.$(SELECTOR.BMS_XPATH_PROFILE).click();
    await driver.$(SELECTOR.BMS_XPATH_PROFILE_ACCOUNT_AND_SETTINGS).click();
    const isSelected = await driver
      .$(SELECTOR.BMS_XPATH_PROFILE_ACCOUNT_AND_SETTINGS_MSELECT_RADIO)
      .getAttribute("checked");
    expect(isSelected).toBe("true");
    const settings = await driver.getSettings();
    console.log(settings);
    await driver.touchPerform([
      { action: "press", options: { x: 550, y: 1900 } },
      { action: "move", options: { x: 550, y: 600 } },
      { action: "release" },
    ]);
  });
});
