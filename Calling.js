const plivo = require('plivo');

exports.handler = async (context, event, callback) => {
    console.log('Inside twilio');
    var response = plivo.Response();
    var dial = response.addDial();

    var params = {
    // 'sendDigits': "wwww2410"
    };
    var number = "+919575337791";
    dial.addNumber(number, params);

    console.log(response.toXML());
    return callback(null, response.toXML());
};
