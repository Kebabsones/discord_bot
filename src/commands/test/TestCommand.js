const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('jestes?', '', []);
  }

  async run(client, message, args) {
    message.channel.send('no jaha');
  }
}