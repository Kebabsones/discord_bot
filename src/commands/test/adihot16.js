
const BaseCommand = require('../../utils/structures/BaseCommand');
const { Client } = require('discord.js');
//const DisTube = require('distube');
const client = new Client();
//const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true });

module.exports = class adihot16 extends BaseCommand {
  constructor() {
    super('my_z_ziomami', '', []);
  }

  async run(client, message, args) {
    // distube.play(message, "https://youtu.be/PB5vO_JDq6M");
    // message.channel.send("siemanero");
    // message.channel.send(message);
    // message = "siemanero";
    // message.channel.send(message);
    // message.channel.send(args.join(" "));
      message.member.voice.channel.join().then(VoiceConnection => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./songs/hot16adi.mp3").on("finish", () => VoiceConnection.disconnect());
      message.channel.send("Policja jebana jest elo");
    }).catch(e => console.log(e))
  }
}

