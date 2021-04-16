const BaseCommand = require('../../utils/structures/BaseCommand');
const { Client } = require('discord.js');
//const DisTube = require('distube');
const client = new Client();
//const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true });

module.exports = class koniec extends BaseCommand {
    constructor() {
    super('dobra_styknie', '', []);
    }
  
    async run(client, message, args) {
      // message.guild.me.voiceChannel.leave();
      message.member.voice.channel.leave()
      message.channel.send("no spoko to naura");
      
    }
  
  }