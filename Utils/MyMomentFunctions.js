// const moment = require("moment");
import moment from 'moment';


class MyMomentFunctions {


    static getCurrentDate() {
        return moment().format('D');
    }

    static getCurrentMomentInFormat(userFormat) {
        return moment().format(userFormat);
    }

}
// module.exports = MyMomentFunctions;
export default MyMomentFunctions;