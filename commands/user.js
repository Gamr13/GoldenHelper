const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

/*
module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('User Info'),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}
*/

module.exports = {
	data: new SlashCommandBuilder()
    .setName("userinfo")
    .setDescription("Retrive the information of a server member.")
    .addUserOption(option => option.setName("member").setDescription("The memeber whose details you want.")),
	run: async (client, interaction) => {
        const member = interaction.options.getMember("member") || interaction.member
        const activities = member.presence?.activities || []

        const focusActivity = activities.find(x => x.assets)
        const embed = new MessageEmbed()
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setColor(member.displayHexColor === "#000000" ? "#ffffff" : member.displayHexColor)
        .setThumbnail(focusActivity ? `https://cdn.discordapp.com/app-assets/${focusActivity.applicationId}/${focusActivity.assets.largeImage}` : member.user.displayAvatarURL())
        .setDescription(activities.map((x, i) => `**${x.type}**: \`${x.name || "None"} : ${x.details || "None"} : ${x.state || "None"}\``).join("\n"))
        .addField("JoinedAt", member.joinedAt.toLocaleString(), true)
        .addField("Account Created At", member.user.createdAt.toLocaleString(), true)
        .addField("Common Information", [
            `Display Name: \`${member.displayName}\``,
            `Pending Member: \`${member.pending ? 'Yes' : 'No'}\``,
            `Booster: \`${member.premiumSince ? 'since ' + member.premiumSince.toLocaleString() : 'Nope'}\``
        ].join("\n"))

        return interaction.followUp({ embeds: [embed] })
	},
};
	
/*
let memberInfo = message.mentions.members.first();
if(!memberInfo){  
    const userinf = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setThumbnail(message.author.avatarURL)
        .setDescription("This is the user's info!")
        .setColor(0x00FF00)
        .addField("Full Username:", `${message.author.username}#${message.author.discriminator}`)
        .addField("ID:", message.author.id)
        .addField("Created At:", message.author.createdAt)
		.setFooter("©Toby#0621 2019", "https://i.imgur.com/dJb2tIq.png")
        message.channel.send(userinf);
}
else{
    const userinfoo = new Discord.RichEmbed()
        .setAuthor(memberInfo.displayName)
        .setThumbnail(memberInfo.user.avatarURL)
        .setDescription("This is the user's info!")
        .setColor(0x00FF00)
        .addField("Full Username:", `${memberInfo.user.username}#${memberInfo.user.discriminator}`)
        .addField("ID:", memberInfo.id)
        .addField("Created At:", memberInfo.user.createdAt)
		.setFooter("©Toby#0621 2019", "https://i.imgur.com/dJb2tIq.png")

        message.channel.send(userinfoo);
}
*/