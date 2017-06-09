var mongoose = require('mongoose');
var deepPopulate = require('mongoose-deep-populate')(mongoose);
var uniqueValidator = require('mongoose-unique-validator');
var timestamps = require('mongoose-timestamp');
var validators = require('mongoose-validators');
var monguurl = require('monguurl');
require('mongoose-middleware').initialize(mongoose);

var Schema = mongoose.Schema;

var schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        uniqueCaseInsensitive: true
    }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Enquirey', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {

    mailSend: function (data, callback) {
        var emailData = {};
        emailData.from = data.email;
        emailData.email = "letstalk@procreatebranding.com";
        emailData.message = data.message;
        emailData.filename = "enquirey.ejs";
        emailData.subject = data.subject;
        console.log("emaildata", emailData);
        Config.email(emailData, function (err, emailRespo) {
            if (err) {
                console.log(err);
                callback(err, null);
            } else if (emailRespo) {
                callback(null, emailRespo);
            } else {
                callback(null, "Invalid data");
            }
        });
    }
};
module.exports = _.assign(module.exports, exports, model);