// Bot

require("dotenv").config();

const { Client, IntentsBitField, EmbedBuilder } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (e) => {
  console.log(`${e.user.tag} is online !`);
});

client.on("messageCreate", (message) => {
  // Bot Can be the Author
  if (message.author.bot) return;

  if (message.content == "hello") {
    message.reply("hello");
  }
});

client.on("interactionCreate", (Interaction) => {
  if (!Interaction.isChatInputCommand()) return;
  if (Interaction.commandName === "add") {
    const num1 = Interaction.options.get("first-number").value;
    const num2 = Interaction.options.get("second-number").value;

    Interaction.reply(`The Summation is ${num1 + num2}`);
  }
  if (Interaction.commandName === "embeded") {
    const embed = new EmbedBuilder()
      .setTitle("Hero-Honda")
      .setDescription("embedeHonda")
      .setColor("Random")
      .setFields({
        name: "Field-Tittle",
        value: "some random Value",
        inline: true,
      },
      {
        name:'Field-Tittle',
        value:"some random value",
        inline:true,

      });

    Interaction.reply({ embeds: [embed] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "embeded") {
    const embed = new EmbedBuilder()
      .setTitle("Hero-Honda")
      .setDescription("embedeHonda")
      .setColor("Random")
      .setFields({
        name: "Field-Tittle",
        value: "some random Value",
        inline: true,
      });

    message.channel.send({ embeds: [embed] }); //without reply
  }
});

client.login(process.env.TOKEN);
