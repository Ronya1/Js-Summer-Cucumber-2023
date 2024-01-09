// const { Given, Then, When } = require("@wdio/cucumber-framework");
import { Given, Then, When,  } from "@wdio/cucumber-framework";
// const { expect } = require("chai");
import * as chai from "chai";
const { expect } = chai;
// const Homepage = require("../../Pages/Facebook/Homepage");
// const Loginpage = require("../../Pages/Facebook/loginpage");
import Homepage from "../../Pages/Facebook/Homepage.js"
import Searchpage from "../../Pages/Hotels/Searchpage.js";
const homepage = new Homepage();
const searchpage = new Searchpage();


// OG CODE - this is in the Facebook LoginSDfile the function there encompases hotels, darksky and FB
Given(/^I am on facebook landing page$/, async function(){
    await browser.url('/')
});

When(/^I enter "(.+)" in going to$/, async function(destination) {
    await homepage.enterDestination(destination);
})

When(/^I select "(.+)" from auto-suggestion$/, async function (autoSuggestionDestination) {
    await homepage.selectDestinationFromAutoSuggestion(autoSuggestionDestination);
})

When(/^I click on search button$/, async function () {
    await homepage.clickSearchButton();
})

Then(/^I verify going to location contains "(.+)"$/, async function (expDestination) {
    await searchpage.waitForSearchByPropertyName();
    expect(await searchpage.isDestinationContainsUserDestination(expDestination), 'User destination is not displayed').to.be.true;
})