
const BaseCommand = require('../../utils/structures/BaseCommand');
const { Client } = require('discord.js');
//const DisTube = require('distube');
const client = new Client();
//const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true });

module.exports = class wiki extends BaseCommand {
  constructor() {
    super('wiki', '', []);
  }

  async run(client, message, args) {
    
    message.channel.send("dawaj na wiki ziomo https://tomada.fandom.com/pl/wiki/Tomada_Wiki");
    // message.channel.send(message);
    // message = "siemanero";
    // message.channel.send(message);
    // message.channel.send(args.join(" "));
  }
}
