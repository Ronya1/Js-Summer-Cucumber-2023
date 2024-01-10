// const Commands = require("../Commands");
import Commands from "../Commands.js";

class Homepage {

    commands = new Commands();
    // Locators for web-elements on the Instagram page (variables)

    async getPageTitle() {
        return await this.commands.getWindowTitle();
    }


}
// module.exports = InstagramPage;
export default Homepage;