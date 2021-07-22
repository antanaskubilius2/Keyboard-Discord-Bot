const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('status', 'testing', []);
  }

  async run(client, message, args) {
    message.channel.send('Online, Check update logs on my Github Link-> https://github.com/antanaskubilius2/Keyboard-Discord-Bot');
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

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('info', 'testing', []);
  }

  async run(client, message, args) {
    message.channel.send('This bot was made in TypeScript and JavaScript ');
  }
}

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('creators', 'testing', []);
  }

  async run(client, message, args) {
    message.channel.send('Antanas K');
  }
}

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('botinfo', 'testing', []);
  }

  async run(client, message, args) {
    message.channel.send('Used VS Code. Also Development took 100Hours+ Thanks for supporting');
  }
}


module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('boot', 'testing', []);
  }

  async run(client, message, args) {
    message.channel.send('Booting VIA RBS ...');
  }
}

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('runtime', 'testing', []);
  }

  async run(client, message, args) {
    message.channel.send('running for long enough, thanks to Antanas for keeping me up!');
  }
}

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('node', 'testing', []);
  }

  async run(client, message, args) {
    message.channel.send('bootstrap with npm');
  }
}

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('run', 'testing', []);
  }

  async run(client, message, args) {
    message.channel.send('running :tools:');
  }
}