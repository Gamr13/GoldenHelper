const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField, PermissionFlagsBits } = require("discord.js");
const fs = require("fs");

module.exports = {
    permissions: [PermissionsBitField.Flags.Administrator],
    data: new SlashCommandBuilder()
    .setName("check")
    .setDescription("Get the number of strikes a user has")
    .addUserOption(option => option
        .setName("user")
        .setDescription("The user to get the strikes of")
        .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.MuteMembers),


    async execute(interaction) {
        const user = interaction.options.getMember("user");
        let content = 0;

        const dataFile = fs.readFileSync("./data/strikes.json", "utf8");
        const data = JSON.parse(dataFile);

        if (!user && !data[user.id]) return interaction.reply({ephemeral: true, content: "User not found!"});

        if (!data[user.id]) {
            data[user.id] = {
                strikes: 0,
                reason: []
            };

            const sendData = fs.writeFileSync("./data/strikes.json", JSON.stringify(data, null, 2), "utf8");
        } else {
            const reasons = data[user.id].reason; //Array of reasons
            content = data[user.id].strikes;
        }
		
		
		
        let embed = new EmbedBuilder()
        .setColor('#920dff')
        .setTitle(`User Check`)
        .setAuthor({name: `${user.user.tag} (ID: ${user.id})`, iconURL:`${user.displayAvatarURL()}`})
        .setThumbnail(`${user.displayAvatarURL()}`)
        .addFields(
            { name: ':triangular_flag_on_post: Strikes: ', value: `${content}`, inline: true },
			{ name: 'Joined At: ', value: `<t:${parseInt(user.joinedAt / 1000)}:R>`, inline: true },
			{ name: 'Joined Discord: ', value: `<t:${parseInt(user.user.createdTimestamp / 1000)}:R>`, inline: true },
			{ name: 'Timed out until: ', value: `${user.communicationDisabledUntil}`, inline: false },
			{ name: "Hasn't passed membership gate?: ", value: `${user.pending}`, inline: false },
			{ name: 'Started Server Boosting: ', value: `${user.premiumSince}`, inline: false },
			{ name: 'Roles: ', value: `${user.roles.cache.map(r => r).join(' ')}`, inline: false }
        );
        interaction.reply({ embeds: [embed] }); 
    }
}
