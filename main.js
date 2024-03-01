/* QUACK QUACK */
/* Pissbot Over 9000 */

/* Currently includes 
-Delete for "ren is a penis"
-Reactions when song titles are mentioned 
-pickmeup
-oneline */

  /* To Do - Add more reactions to some of the songs */

const fs = require("fs");
const path = require("path");
const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();
const moment = require('moment');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const token = process.env.DISCORD_TOKEN;

const renLetsGoEmojiId = "1211910058921820200";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", (msg) => {
  if (msg.author.bot) return;

/* RENS A PENIS/REN IS A PENIS DELETE CODE */

  const forbiddenPhrase = /ren(\W|_|\d|\s)*is(\W|_|\d|\s)*a(\W|_|\d|\s)*penis/i;
  const forbiddenPhraseRens = /rens(\W|_|\d|\s)*a(\W|_|\d|\s)*penis/i;
  const forbiddenPhraseLeetspeak = /r(\W|_|\d|\s)*[e3](\W|_|\d|\s)*n(\W|_|\d|\s)*[s5$](\W|_|\d|\s)*a(\W|_|\d|\s)*p(\W|_|\d|\s)*[e3](\W|_|\d|\s)*n(\W|_|\d|\s)*[i1!5$](\W|_|\d|\s)*/i;
  const forbiddenPhraseLeetspeak2 = /r(\W|_|\d|\s)*[e3](\W|_|\d|\s)*n(\W|_|\d|\s)*[i1!5$](\W|_|\d|\s)*s(\W|_|\d|\s)*a(\W|_|\d|\s)*p(\W|_|\d|\s)*[e3](\W|_|\d|\s)*n(\W|_|\d|\s)*[i1!5$](\W|_|\d|\s)*/i;
  const forbiddenPhraseLeetspeak3 = /r(\W|_|\d|\s)*[e3](\W|_|\d|\s)*n(\W|_|\d|\s)*s(\W|_|\d|\s)*a(\W|_|\d|\s)*p(\W|_|\d|\s)*[e3](\W|_|\d|\s)*n(\W|_|\d|\s)*[i1!5$](\W|_|\d|\s)*/i;
  const forbiddenPhraseLeetspeak4 = /r(\W|_|\d|\s)*[e3](\W|_|\d|\s)*n(\W|_|\d|\s)*[i1!5$](\W|_|\d|\s)*s(\W|_|\d|\s)*a(\W|_|\d|\s)*p(\W|_|\d|\s)*[e3](\W|_|\d|\s)*n(\W|_|\d|\s)*s(\W|_|\d|\s)*a(\W|_|\d|\s)*p(\W|_|\d|\s)*[e3](\W|_|\d|\s)*n(\W|_|\d|\s)*[i1!5$](\W|_|\d|\s)*/i;
  const forbiddenPhraseLeetspeak5 = /r(\W|_|\d|\s)*[e3](\W|_|\d|\s)*n(\W|_|\d|\s)*[i1!5$](\W|_|\d|\s)*s(\W|_|\d|\s)*a(\W|_|\d|\s)*p(\W|_|\d|\s)*[e3](\W|_|\d|\s)*n(\W|_|\d|\s)*[i1!5$](\W|_|\d|\s)*s(\W|_|\d|\s)*a(\W|_|\d|\s)*p(\W|_|\d|\s)*[e3](\W|_|\d|\s)*n(\W|_|\d|\s)*[i1!5$](\W|_|\d|\s)*/i;
  const forbiddenPhraseLeetspeak6 = /r(\W|_|\d|\s)*[e3](\W|_|\d|\s)*n(\W|_|\d|\s)*[i1!5$](\W|_|\d|\s)*s(\W|_|\d|\s)*a(\W|_|\d|\s)*p(\W|_|\d|\s)*[e3](\W|_|\d|\s)*n(\W|_|\d|\s)*s(\W|_|\d|\s)*a(\W|_|\d|\s)*p(\W|_|\d|\s)*[e3](\W|_|\d|\s)*n(\W|_|\d|\s)*[i1!5$](\W|_|\d|\s)*s(\W|_|\d|\s)*a(\W|_|\d|\s)*p(\W|_|\d|\s)*[e3](\W|_|\d|\s)*n(\W|_|\d|\s)*s(\W|_|\d|\s)*a(\W|_|\d|\s)*p(\W|_|\d|\s)*[e3](\W|_|\d|\s)*n(\W|_|\d|\s)*[i1!5$](\W|_|\d|\s)*/i;

  if (forbiddenPhrase.test(msg.content) || forbiddenPhraseRens.test(msg.content) || forbiddenPhraseLeetspeak.test(msg.content) || forbiddenPhraseLeetspeak2.test(msg.content) || forbiddenPhraseLeetspeak3.test(msg.content) || forbiddenPhraseLeetspeak4.test(msg.content) || forbiddenPhraseLeetspeak5.test(msg.content) || forbiddenPhraseLeetspeak6.test(msg.content)) {
    msg.delete()
      .then(() => console.log(`Deleted message from ${msg.author.username}`))
      .catch((error) => console.error("Error deleting message:", error));
    return;
  }

  /* SONG REACTIONS */

  if (msg.content.toLowerCase().includes("hi ren")) {
    msg.react(renLetsGoEmojiId)
      .catch((error) => console.error("Error adding reaction:", error));
  }

  if (msg.content.toLowerCase().includes("money game")) {
    msg.react(renLetsGoEmojiId)
      .catch((error) => console.error("Error adding reaction:", error));
  }

  if (msg.content.toLowerCase().includes("eden")) {
    msg.react(renLetsGoEmojiId)
      .catch((error) => console.error("Error adding reaction:", error));
  }

  if (msg.content.toLowerCase().includes("uninvited")) {
    msg.react(renLetsGoEmojiId)
      .catch((error) => console.error("Error adding reaction:", error));
  }

  if (msg.content.toLowerCase().includes("murderer")) {
    msg.react(renLetsGoEmojiId)
      .catch((error) => console.error("Error adding reaction:", error));
  }

  if (msg.content.toLowerCase().includes("animal flow")) {
    msg.react(renLetsGoEmojiId)
      .catch((error) => console.error("Error adding reaction:", error));
  }

  if (msg.content.toLowerCase().includes("genesis")) {
    msg.react(renLetsGoEmojiId)
      .catch((error) => console.error("Error adding reaction:", error));
  }

  if (msg.content.toLowerCase().includes("the hunger")) {
    msg.react(renLetsGoEmojiId)
      .catch((error) => console.error("Error adding reaction:", error));
  }

  if (msg.content.toLowerCase().includes("sick boi")) {
    msg.react(renLetsGoEmojiId)
      .catch((error) => console.error("Error adding reaction:", error));
  }

  if (msg.content.toLowerCase().includes("jenny")) {
    msg.react(renLetsGoEmojiId)
      .catch((error) => console.error("Error adding reaction:", error));
  }

  if (msg.content.toLowerCase().includes("screech")) {
    msg.react(renLetsGoEmojiId)
      .catch((error) => console.error("Error adding reaction:", error));
  }

  if (msg.content.toLowerCase().includes("violet")) {
    msg.react(renLetsGoEmojiId)
      .catch((error) => console.error("Error adding reaction:", error));
  }

  if (msg.content.toLowerCase().includes("losing it")) {
    msg.react(renLetsGoEmojiId)
      .catch((error) => console.error("Error adding reaction:", error));
  }

  if (msg.content.toLowerCase().includes("chalk outlines")) {
    msg.react(renLetsGoEmojiId)
      .catch((error) => console.error("Error adding reaction:", error));
  }

  if (msg.content.toLowerCase().includes("humble")) {
    msg.react(renLetsGoEmojiId)
      .catch((error) => console.error("Error adding reaction:", error));
  }

  if (msg.content.toLowerCase().includes("freckled angels")) {
    msg.react(renLetsGoEmojiId)
      .catch((error) => console.error("Error adding reaction:", error));
  }

  if (msg.content.toLowerCase().includes("blind eyed")) {
    msg.react(renLetsGoEmojiId)
      .catch((error) => console.error("Error adding reaction:", error));
  }

  if (msg.content.toLowerCase().includes("crutch")) {
    msg.react(renLetsGoEmojiId)
      .catch((error) => console.error("Error adding reaction:", error));
  }

  if (msg.content.toLowerCase().includes("dominoes")) {
    msg.react(renLetsGoEmojiId)
      .catch((error) => console.error("Error adding reaction:", error));
  }

  if (msg.content.toLowerCase().includes("children of the moon")) {
    msg.react(renLetsGoEmojiId)
      .catch((error) => console.error("Error adding reaction:", error));
  }

  if (msg.content.toLowerCase().includes("life is funny")) {
    msg.react(renLetsGoEmojiId)
      .catch((error) => console.error("Error adding reaction:", error));
  }

  if (msg.content.toLowerCase().includes("dear god")) {
    msg.react(renLetsGoEmojiId)
      .catch((error) => console.error("Error adding reaction:", error));
  }

  if (msg.content.toLowerCase().includes("power")) {
    msg.react(renLetsGoEmojiId)
      .catch((error) => console.error("Error adding reaction:", error));
  }

  if (msg.content.toLowerCase().includes("bittersweet symphony")) {
    msg.react(renLetsGoEmojiId)
      .catch((error) => console.error("Error adding reaction:", error));
  }

  if (msg.content.toLowerCase().includes("for joe")) {
    msg.react(renLetsGoEmojiId)
      .catch((error) => console.error("Error adding reaction:", error));
  }

  if (msg.content.toLowerCase().includes("what you want")) {
    msg.react(renLetsGoEmojiId)
      .catch((error) => console.error("Error adding reaction:", error));
  }

  if (msg.content.toLowerCase().includes("lost all faith")) {
    msg.react(renLetsGoEmojiId)
      .catch((error) => console.error("Error adding reaction:", error));
  }

  if (msg.content.toLowerCase().includes("masochist")) {
    msg.react(renLetsGoEmojiId)
      .catch((error) => console.error("Error adding reaction:", error));
  }

  if (msg.content.toLowerCase().includes("illest of our time")) {
    msg.react(renLetsGoEmojiId)
      .catch((error) => console.error("Error adding reaction:", error));
  }

  if (msg.content.toLowerCase().includes("right here right now")) {
    msg.react(renLetsGoEmojiId)
      .catch((error) => console.error("Error adding reaction:", error));
  }

  if (msg.content.toLowerCase().includes("diazepam")) {
    msg.react(renLetsGoEmojiId)
      .catch((error) => console.error("Error adding reaction:", error));
  }

/* PICK ME UP CODE */

  if (msg.content.toLowerCase() === "-pickmeup") {
    msg.channel.sendTyping();

    const filePath = path.join(__dirname, "data", "pickmeup.txt");

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return msg.reply("Error reading file");
      }

      const lines = data.split("\n");

      const randomLine = lines[Math.floor(Math.random() * lines.length)];

      msg.reply(randomLine);
    });
  }

/* One Liners Code */

  if (msg.content.toLowerCase() === "-oneline") {
    msg.channel.sendTyping();

    const filePath = path.join(__dirname, "data", "oneliners.txt");

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return msg.reply("Error reading file");
      }

      const lines = data.split("\n");

      const randomLine = lines[Math.floor(Math.random() * lines.length)];

      msg.reply(randomLine);
    });
  }

  /* CONWINNER COMMAND */

  if (msg.content.toLowerCase().startsWith("/compwinner")) {
    const commandArgs = msg.content.split(" ");
    const username = commandArgs[1];

    const mentionedUser = msg.mentions.members.first();

    if (!mentionedUser) {
      return msg.reply("Please mention a user to assign the role.");
    }

    const roleToAssign = msg.guild.roles.cache.find((role) => role.name === "Competition Winner");

    if (!roleToAssign) {
      return msg.reply("Role not found. Please make sure the role exists.");
    }

    mentionedUser.roles.add(roleToAssign)
      .then(() => {
        msg.reply(`Role ${roleToAssign.name} assigned to ${mentionedUser.user.username}.`);

        const april1stGMT = moment.utc("2024-04-01T00:00:00");
        const currentTime = moment.utc();
        const timeDifference = april1stGMT.diff(currentTime);

        const scheduleRemoval = (remainingTime) => {
          if (remainingTime <= 0) {
            mentionedUser.roles.remove(roleToAssign)
              .then(() => {
                msg.reply(`Role ${roleToAssign.name} removed from ${mentionedUser.user.username} on April 1st at 12 AM GMT.`);
              })
              .catch((error) => {
                console.error("Error removing role:", error);
                msg.reply("Error removing role on April 1st at 12 AM GMT. Please check the bot's permissions.");
              });
          } else {
            const timeoutDuration = Math.min(remainingTime, 24 * 60 * 60 * 1000);
            setTimeout(() => scheduleRemoval(remainingTime - timeoutDuration), timeoutDuration);
          }
        };

        scheduleRemoval(timeDifference);
      })
      .catch((error) => {
        console.error("Error assigning role:", error);
        msg.reply("Error assigning role. Please try again.");
      });
  }
});

client.login(token);
/* Did i do good duckman? :D */