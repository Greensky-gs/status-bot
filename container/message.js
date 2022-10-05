const { Client } = require('discord.js');

/**
 * @param {Client} bot
 * @param {'online' | 'offline'} state 
 */
module.exports = (bot, state) => {
    if (state === 'offline') {
        return `<@${bot.id}> is down`;
    } else {
        return `<@${bot.id}> is on`
    }
}