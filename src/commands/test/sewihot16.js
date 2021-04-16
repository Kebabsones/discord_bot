
const BaseCommand = require('../../utils/structures/BaseCommand');
const { Client } = require('discord.js');
//const DisTube = require('distube');
const client = new Client();
//const distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: false });

module.exports = class sewihot16 extends BaseCommand {
  constructor() {
    super('hot16', '', []);
  }

  async run(client, message, args) {
    // distube.play(message, "https://youtu.be/EsVJGzqd3RI");
    // message.channel.send("gram");
    // distube.stop(message);
    // message.channel.send("nie gram juz");
    
    // message.channel.send("siemanero");
    // message.channel.send(message);
    // message = "siemanero";
    // message.channel.send(message);
    // message.channel.send(args.join(" "));
    message.member.voice.channel.join().then(VoiceConnection => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./songs/hot16sewi.mp3").on("finish", () => VoiceConnection.disconnect());
      message.channel.send("Ale jazda");
  }).catch(e => console.log(e))

  }
}
