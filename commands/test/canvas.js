const { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder } = require("discord.js");
const Canvas  = require("@napi-rs/canvas");
const imageSize = require("probe-image-size");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("canvas")
    .setDescription("canvas command")
    .addUserOption(option => option
        .setName("target")
        .setDescription("target user")
        .setRequired(true)
    ),

    async execute(interaction) {
        const target = interaction.options.getUser("target");
        const imgArr = ["https://i.pinimg.com/originals/28/c1/20/28c120650567cf19f62c3bb0af529f62.png"];
        const img = imgArr[Math.floor(Math.random() * imgArr.length)];
        const size = await imageSize(img);

        const canvas = Canvas.createCanvas(size.width, size.height);
        const c = canvas.getContext("2d");
        const pfpSize = canvas.width * 0.2;

        const bg = await Canvas.loadImage(img);
        const avatar = await Canvas.loadImage(interaction.user.displayAvatarURL({ extension: "png" }));
        const targetAvatar = await Canvas.loadImage(target.displayAvatarURL({ extension: "png" }));

        c.drawImage(bg, 0, 0, canvas.width, canvas.height);

        c.beginPath();
        c.arc(280 + pfpSize / 2, 50 + pfpSize / 2, pfpSize / 2, 0, Math.PI * 2);
        c.arc(330 + pfpSize /2, 220 + pfpSize / 2, pfpSize / 2, 0, Math.PI * 2);
        c.closePath();
        c.clip();

        c.drawImage(avatar, 280, 50, pfpSize, pfpSize);
        c.drawImage(targetAvatar, 330, 220, pfpSize, pfpSize);

        const image = new AttachmentBuilder(await canvas.encode("png"), { name: "image.png" });
        const embed = new EmbedBuilder()
        .setColor("#313338")
        .setImage("attachment://image.png");

        await interaction.reply({ embeds: [embed], files: [image] });
    }
}