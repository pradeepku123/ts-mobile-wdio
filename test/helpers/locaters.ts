const SELECTOR = {
  BMS_XPATH_PROFILE: `//android.widget.TextView[@resource-id="com.bt.bms:id/lblProfile" and @text="Profile"]`,
  BMS_XPATH_PROFILE_ACCOUNT_AND_SETTINGS: `//android.widget.TextView[@text="Accounts & Settings"]`,
  BMS_XPATH_PROFILE_ACCOUNT_AND_SETTINGS_MSELECT_RADIO: `//androidx.recyclerview.widget.RecyclerView[@resource-id="com.bt.bms:id/rv_settings_menu"]/android.widget.LinearLayout[5]/android.widget.RadioButton
`,
};
export { SELECTOR };
