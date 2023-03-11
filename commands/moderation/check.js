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

        if (!data[user.id]) {
            data[user.id] = {
                strikes: 0
            };

            const sendData = fs.writeFileSync("./data/strikes.json", JSON.stringify(data, null, 2), "utf8");
        } else {
            content = data[user.id].strikes;
        }

        let embed = new EmbedBuilder()
        .setColor('#920dff')
        .setTitle(`Strikes`)
        .setAuthor({name: 'GoldenHelper', iconURL:"https://i.imgur.com/o7MkhhK.png"})
        .setDescription(`:white_check_mark: Information for: ${user.user.tag} (ID: ${user.id} )`)
        .setThumbnail(`${user.displayAvatarURL()}`)
        .addFields(
            { name: ':triangular_flag_on_post: Strikes: ', value: `${content}`, inline: true }
            { moment.utc(user.joinedAt.toISOString()).format('dddd, MMMM Do YYYY, HH:mm:ss') }
        );
        interaction.reply({ embeds: [embed] }); 
    }
}
