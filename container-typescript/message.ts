const { User } = require('discord.js');

export default function(bot, state) {
    if (state === 'offline') {
        return `<@${bot.id}> is down`;
    } else {
        return `<@${bot.id}> is on`
    }
}