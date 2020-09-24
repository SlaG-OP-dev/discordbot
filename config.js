module.exports = {
    owner: process.env.OWNERID,
    prefix: process.env.PREFIX,
    defaultGuildSettings: {
        prefix: process.env.PREFIX,
        welcomeChannel: "welcome",
        welcomeMessage: "Welcome **{{user}}** to **{{guild}}**!",
        modRole: "Moderator",
        adminRole: "Administrator",
        logChannel: "admin"
    }
}