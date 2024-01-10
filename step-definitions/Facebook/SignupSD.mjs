import { Given, Then, When,  } from "@wdio/cucumber-framework";
import MyMomentFunctions from '../../Utils/MyMomentFunctions.js'
import SignUpPage from "../../Pages/Facebook/SignUpPage.js";
import * as chai from "chai";
const { expect } = chai;
const signUpPage = new SignUpPage();

Given(/^I am on facebook homepage1$/, async function () {
    await browser.url(`https://www.facebook.com/`)
    await browser.pause(5000)
})


When(/^I click Create New Account button1$/, async function () {
    await $('a=Create new account').click()
    await browser.pause(2000)
})

Then(/^I verify current date is selected in dropdown1$/, async function () {
    const date = MyMomentFunctions.getCurrentMomentInFormat('D');
    const selectedDate = await signUpPage.getSelectedBirthDay();
    expect(selectedDate, 'Current date is not selected in dropdown').to.equal(date);

    const month = MyMomentFunctions.getCurrentMomentInFormat('MMM');
    const selectedMonth = await signUpPage.getSelectedBirthMonth();
    expect(selectedMonth, 'Current month is not selected in dropdown').to.equal(month);

    const year = MyMomentFunctions.getCurrentMomentInFormat('YYYY');
    const selectedYear = await signUpPage.getSelectedBirthYear();
    expect(selectedYear, 'Current year is not selected in dropdown').to.equal(year);
})