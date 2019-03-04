const ram = require('./ramutil');
const noty = require('./notification');

var trackRamUtilization = () => {
    setInterval(() => {
        var usedRam = ram.ramCalculation();
        if (usedRam > 50) {
            noty.notifyUser();
        }
    },10*1000)
}

module.exports = {
    trackRamUtilization
}