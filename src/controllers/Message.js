const app = require('../../app');
const message = require('../helpers/Message');

class MessageController {
  async Message(req) {
    console.log('Inside Message controller method');
    const response = await message.message.hello(req);
    return response;
  }
}

module.exports = app.Action.newClass(MessageController);
