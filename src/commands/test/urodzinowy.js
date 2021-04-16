const BaseCommand = require('../../utils/structures/BaseCommand');
const { Client } = require('discord.js');
//const DisTube = require('distube');
const client = new Client();
//const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true });

module.exports = class urodzinowy extends BaseCommand {
  constructor() {
    super('25maja', '', []);
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
      VoiceConnection.play("./songs/urodzinowy.mp3").on("finish", () => VoiceConnection.disconnect());
      message.channel.send("Najlepszego Sewi");
    }).catch(e => console.log(e))
  }
}

