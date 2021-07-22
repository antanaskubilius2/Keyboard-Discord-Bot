const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('status', 'testing', []);
  }

  async run(client, message, args) {
    message.channel.send('Online, Check update logs on my Github');
  }
}

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('youtube', 'testing', []);
  }

  async run(client, message, args) {
    message.channel.send('My youtube is Antanas Keyboards but heres a link https://www.youtube.com/channel/UCCvb6nxzb5vFmnJZg1OpIFQ make sure to subscribe');
  }
}