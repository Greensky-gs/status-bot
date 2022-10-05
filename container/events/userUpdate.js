const { GuildMember } = require('discord.js');

module.exports = {
    event: 'guildMemberUpdate',
    /**
     * @param {GuildMember} before 
     * @param {GuildMember} after 
     */
    execute: (before, after) => {
        if (after.id !== process.env.bot) return;
        if (after.presence.status === 'offline' && before.presence.status !== 'online') {
            
        }
    }
}