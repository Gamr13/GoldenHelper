const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Slam the ban hammer on a member.')
    .addUserOption(option => option.setName('target').setDescription('Who do I ban?').setRequired(true))
    .addStringOption(option => option.setName('reason').setDescription('Why are they being banned?'))
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),

    async execute (interaction, client) {

        const banUser = interaction.options.getUser('target');
        const banMember = await interaction.guild.members.fetch(banUser.id);
        const channel = interaction.channel;

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) return await interaction.reply({ content: "Error: You don't have permission to use this command.", ephemeral: true });
        if (!banMember) return await interaction.reply({ content: 'Error: User is not in the server.', ephemeral: true});
        if (!banMember.kickable) return await interaction.reply({ content: "Error: This person is above you in roles.", ephemeral: true});

        let reason = interaction.options.getString('reason');
        if (!reason) reason = "No reason given.";
        
        let dmMessageContent = [
            "awoo",
            "mlem",
            "coded by gay furry L"
        ];

        const dmEmbed = new EmbedBuilder()
        .setColor("DarkOrange")
        .addFields(
            { name: ':white_check_mark:', value: `{dmMessageContent[Math.floor(Math.random() * 3)]}`, inline: false },
            { name: 'Reason:', value: `${reason}`, inline: false },
        )

        const embed = new EmbedBuilder()
        .setColor("DarkOrange")
        .setDescription(`:white_check_mark:  ${banUser.tag} has been **banned** `)
        .addFields(
                { name: 'Reason:', value: `${reason}`, inline: false },
            )

        await banMember.send({ embeds: [dmEmbed] }).catch(err => return);

        await banMember.ban({ reason: reason }).catch(err => {
            interaction.reply({ content: `There was an error.`, ephemeral: true});
        });

        await interaction.reply({ embeds: [embed] });

    }
}
