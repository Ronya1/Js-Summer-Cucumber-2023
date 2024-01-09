// const { Given, Then, When } = require("@wdio/cucumber-framework");
import { Given, Then, When,  } from "@wdio/cucumber-framework";
// const { expect } = require("chai");
import * as chai from "chai";
const { expect } = chai;
// const Homepage = require("../../Pages/Facebook/Homepage");
// const Loginpage = require("../../Pages/Facebook/loginpage");
import Homepage from "../../Pages/Facebook/Homepage.js"
import Loginpage from "../../Pages/Facebook/loginpage.js";
const homepage = new Homepage();
const loginpage = new Loginpage();



// OG CODE 
// Given(/^I am on facebook landing page$/, async function(){
//     await browser.url('/')
// });
//CONVERTED TO THE BELOW - But very confusing why hes doing hotels and Darksky from FB step definitions. 
Given(/^I am on (facebook|hotels|darksky) homepage$/, async function(urlName) {
    switch (urlName.toLowerCase()) {
        case 'facebook':
            await browser.url('/');
            break;
        case 'hotels':
            await browser.url('https://www.hotels.com/');
            break;
        case 'darksky':
            await browser.url('https://www.darksky.net/');
            break;    
        default:
            await browser.url('/');
            break;
    }
});

Then(/^I verify login username field is enabled$/, async function(){
    expect(await homepage.isLoginEmailFieldEnabled(), 'login email field is NOT enabled').to.be.true
});

Then(/^I verify login password field is enabled$/, async function(){
    expect(await homepage.isLoginPwdFieldEnabled(), 'login password field is NOT enabled').to.be.true
});

Then(/^I verify login button field is enabled$/, async function(){
    expect(await homepage.isLoginBtnEnabled(), 'login button is NOT enabled').to.be.true
});



// // Second Test Case 
// When(/^I enter "(.*)" as username$/, async function (username) {
//   await homepage.enterLoginEmail(username)
// });

// When(/^I enter "(.*)" as password$/, async function (password) {
//   await homepage.enterLoginPassword(password);
// });
// Combingin the above 2 functions into 1 below 
When(/^I enter "(.+)" as (username|password)$/, async function(value, fieldName) {
    switch(fieldName) {
        case 'username':
            await homepage.enterLoginEmail(value);
            break;
        case 'password':
            await homepage.enterLoginPassword(value);
            break;            
    }
});


When(/^I click login button$/, async function () {
  await homepage.clickLoginButton();
});

Then(/^I verify error is displayed$/, async function () {
  expect(await loginpage.isLoginErrDisplayed(), 'Login error is NOT displayed').to.be.true;
  // Check the locator for the error message thats probably why its coming out false
  await browser.pause(2000)
});

Then(/^I verify (.+) links on the homepage$/, async function(count) {
    const links = await homepage.getAllLinks();
    expect(links.length, 'Links of Homepage is not as expected').to.equal(Number(count));
});
