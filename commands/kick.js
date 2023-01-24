const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('kick')
    .setDescription('This commands kicks a server member')
    .addUserOption(option => option.setName('target').setDescription('The user you would like to kick').setRequired(true))
    .addStringOption(option => option.setName('reason').setDescription('The reason for kicking the user.')),
    async execute (interaction, client) {

        const kickUser = interaction.options.getUser('target');
        const kickMember = await interaction.guild.members.fetch(kickUser.id);
        const channel = interaction.channel;

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers)) return await interaction.reply({ content: "Error: You don't have permission to use this command.", ephemeral: true });
        if (!kickMember) return await interaction.reply({ content: 'Error: User is not in the server.', ephemeral: true});
        if (!kickMember.kickable) return await interaction.reply({ content: "Error: This person is above you in roles.", ephemeral: true});

        let reason = interaction.options.getString('reason');
        if (!reason) reason = "No reason given.";

        const dmEmbed = new EmbedBuilder()
        .setColor("DarkOrange")
        .addFields(
            { name: ':white_check_mark:', value: `You got kicked out of: **${interaction.guild.name}**`, inline: false },
            { name: 'Reason:', value: `${reason}`, inline: false },
        )
        const embed = new EmbedBuilder()
        .setColor("DarkOrange")
        .setDescription(`:white_check_mark:  ${kickUser.tag} has been **kicked** `)
        .addFields(
                { name: 'Reason:', value: `${reason}`, inline: false },
            )
        await kickMember.send({ embeds: [dmEmbed] }).catch(err => {
            return;
        });

        await kickMember.kick({ reason: reason }).catch(err => {
            interaction.reply({ content: "There was an error", ephemeral: true});
        });

        await interaction.reply({ embeds: [embed] });

    }
}