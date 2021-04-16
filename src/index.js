
const { Client } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
const DisTube = require('distube');
const config = require('../slappey.json');
const client = new Client();
const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true });

(async () => {
  client.commands = new Map();
  client.events = new Map();
  client.prefix = config.prefix;
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(config.token);
})();

