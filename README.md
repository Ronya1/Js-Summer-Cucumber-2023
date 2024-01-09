# Js-Summer-Cucumber-2023

when creating classes you need to do: 
    import Commands from "../Commands.js";
    export default Homepage;

    to use class in another file do: 
        import Loginpage from "../../Pages/Facebook/loginpage.js";

    to get Chai do: 
        import { Given, Then, When } from "@wdio/cucumber-framework";
        import * as chai from "chai";
        const { expect } = chai;

        to run files based on cjs and mjs file types do 
            npx wdio run wdio.conf.cjs --spec ./features/Facebook/Login.feature 
