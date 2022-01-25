function addCommas(num) {
    let str = num.toString();
    if (num > 0) {

        let back = '';
        for (let i = 0; i < str.length; i++) {
            if ((str.length - i) % 3 === 0) {
                back += ',';
            }
            back += str[i];
        }
        return back;
    }
    else {
        let positiveNum = str.slice(1)
        let back = '';
        for (let i = 0; i < positiveNum.length; i++) {
            if ((positiveNum.length - i) % 3 === 0) {
                back += ',';
            }
            back += positiveNum[i];

        }
        return "-" + back;
    }
}

module.exports = addCommas;