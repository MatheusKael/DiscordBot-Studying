const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("guildMemberAdd", (member) => {
  const channel = member.guild.channels.cache.find(
    (ch) => ch.name === "recepção"
  );

  if (!channel) return;

  channel.send(`Bem-vindo ao servidor ${member}`);
});

client.on("message", (inMsg) => {
  let msg = inMsg.content.toLowerCase();

  if (msg.match("i hate you")) {
    inMsg.channel.send("Are you sure? I'd Like to be friends!");
    setTimeout(() => {
      replyInPM(inMsg, "Can we be Friends?");
    }, 3000);
  } else {
    console.log("Nothin");
  }
});

client.on("message", (message) => {
  if (message.content === "ping") {
    message.reply("Pong");
  }
});

client.login(`${process.env.TOKEN}`);
