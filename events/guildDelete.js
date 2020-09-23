const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { formatDate, formatDateLong } = require("../functions");
const { Guild } = require("../models");

module.exports = async (client, guild) => {
    try {
        await Guild.findOneAndDelete({ guildID: guild.id });
    } catch (err) {
        console.error("Leave server error: ", err);
    }

    console.log(`Left guild: ${guild.name}`);

    const owner = await client.users.fetch(process.env.OWNERID);

    const embedMsg = new MessageEmbed()
        .setColor("RED")
        .setTimestamp()
        .setFooter(guild.name, guild.iconURL())
        .setAuthor("Left server :(", guild.iconURL())
        .addField("Guild information", stripIndents`**\\> ID:** ${guild.id}
            **\\> Name:** ${guild.name}
            **\\> Member count:** ${guild.memberCount}
            **\\> Created at:** ${formatDateLong(guild.createdTimestamp)}
            **\\> Joined at:** ${formatDateLong(guild.joinedTimestamp)}`)
        .addField("Server owner information", stripIndents`**\\> ID:** ${guild.owner.user.id}
            **\\> Username:** ${guild.owner.user.username}
            **\\> Discord Tag:** ${guild.owner.user.tag}
            **\\> Created account:** ${formatDate(guild.owner.user.createdAt)}`, true);

    owner.send(embedMsg);
};