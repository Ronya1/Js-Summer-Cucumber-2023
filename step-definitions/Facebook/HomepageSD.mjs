import { Given, Then, When,  } from "@wdio/cucumber-framework";
// const { expect } = require("chai");
import * as chai from "chai";
const { expect } = chai;
// const Homepage = require("../../Pages/Facebook/Homepage");
// const Loginpage = require("../../Pages/Facebook/loginpage");
import Homepage from "../../Pages/Facebook/Homepage.js"
import InstagramPage from "../../Pages/Facebook/InstagramPage.js";
const homepage = new Homepage();
const instagramPage = new InstagramPage();

// Glue code
/**
 * Glue code is a regular expression which helps to map Scenario-steps with functions
 */
Given(/^I click on (.+) link$/, async function(linkName) {
    await homepage.clickLinkOnFooter(linkName);
});

Given(/^I verify .+ opens in a new tab$/, async function() {
    const totalWindows = await homepage.getNumberOfWindows();
    expect(totalWindows, 'There is no new window').to.equal(2);
    await homepage.closeWindowExceptHome();
});
