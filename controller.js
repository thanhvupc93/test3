const User = require('./user');

const employee = new User('employee', new Date('2018-04-02'));
const affiliate = new User('affiliate', new Date('2019-04-02'));
const towYears = new User(null, new Date('2017-04-02'));
const bill100 = new User(null, new Date('2019-04-02'));


const getBill = (user, bill) => {
    try {
        if (user && isNumber(bill)) {
            let netBill = bill;
            switch (user.type) {
                case 'employee':
                    netBill = bill - (bill * 0.3)
                    break;
                case 'affiliate':
                    netBill = bill - (bill * 0.1)
                    break;
                default:
                    if (new Date().getTime() - new Date(user.createdDate).getTime() > 63115200000) {
                        netBill = bill - (bill * 0.05)
                    } else if (bill >= 100) {
                        netBill = bill - (Math.floor((bill / 100)) * 5)
                    } else netBill = bill;
                    break;
            }
            return netBill
        }else throw 'error : format data';
    } catch (error) {
        return error
    }

}

function isNumber (value) {
    return typeof value === 'number' && isFinite(value);
}

console.log(getBill(bill100, 100))