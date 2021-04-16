
const BaseCommand = require('../../utils/structures/BaseCommand');
const { Client } = require('discord.js');
//const DisTube = require('distube');
const client = new Client();
//const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true });

module.exports = class arrasy extends BaseCommand {
  constructor() {
    super('arrasy', '', []);
  }

  async run(client, message, args) {
    // distube.play(message, "https://www.youtube.com/watch?v=J58ojMSxE64");
    // message.channel.send("siemanero");
    // message.channel.send(message);
    // message = "siemanero";
    // message.channel.send(message);
    // message.channel.send(args.join(" "));
    message.member.voice.channel.join().then(VoiceConnection => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./songs/arrasy.mp3").on("finish", () => VoiceConnection.disconnect());
      message.channel.send("No to lecimy");
  }).catch(e => console.log(e))
  }
}

