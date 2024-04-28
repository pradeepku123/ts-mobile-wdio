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
  it("Verify M-Ticket Should be selected By default", async () => {
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
});
