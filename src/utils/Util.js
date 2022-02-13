class Util {

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    round10(x) {
        return Math.ceil(x / 10) * 10;
    };

    getNumberRandomRound10() {
       return  this.round10(this.getRandomInt(1000, 100000));
    }

    hasValue(str) {
        let result = true;
        if (typeof str == 'number') {
            result = true;
        } else if (str == undefined) {
            result = false;
        } else if (str == null) {
            result = false;
        } else if (str == '') {
            result = false;
        }
        return result;
    }
}

export default new Util();
