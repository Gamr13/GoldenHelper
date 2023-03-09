const { SlashCommandBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
    permissions: [PermissionsBitField.Flags.Administrator],
    data: new SlashCommandBuilder()
    .setName("modal")
    .setDescription("Testing the new modal thing. :3"),

    async execute(interaction) {
        const modal = new ModalBuilder()
        .setCustomId("modal")
        .setTitle("My Modal!");

        const moodInput = new TextInputBuilder()
        .setCustomId("mood")
        .setLabel("How are you feeling today?")
        .setPlaceholder("e.g.: Happy!")
        .setStyle(TextInputStyle.Short);

        const otherInput = new TextInputBuilder()
        .setCustomId("other")
        .setLabel("Is there anything you would like to add?")
        .setPlaceholder("Well?")
        .setStyle(TextInputStyle.Paragraph);

        const firstAR = new ActionRowBuilder().addComponents(moodInput);
        const secondAR = new ActionRowBuilder().addComponents(otherInput);

        modal.addComponents(firstAR, secondAR);
        await interaction.showModal(modal);
    }
}