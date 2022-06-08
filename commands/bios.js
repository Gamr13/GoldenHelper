const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('bios')
        .setDescription('Where to place BIOS files'),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}

const exampleEmbed = new MessageEmbed()
	.setColor('#FFD700')
	.setTitle('BIOS file locations')
	.setAuthor('GoldenHelper', 'https://i.imgur.com/o7MkhhK.png')
	.setDescription("Before reading this guide, please make sure you read /ftp first, it will help you connect to your Xbox. \n\n**Step 1)** Connect to your Xbox and open LOCALFOLDER > The RetroArch folder > LocalState > system \n\n**Step 2)** Place all of your BIOS files in here **EXCEPT** PS2 & Wii / GC BIOS files. \n\n**Step 3)** create a 'pcsx2' folder and inside that create a 'bios' folder. It's recommended to create a 'cheats' and 'cheats_ws' folder as well. Your PCSX2 folder should now [look like this](https://i.imgur.com/V5KiBok.png) \n\n**Step 4)** For Dolphin, download [this file](https://cdn.discordapp.com/attachments/538519852697255936/969345769008140308/Dolphin-emu.zip) and extract it on your PC / Phone, then copy it to RetroArch's LocalState folder > system. You should now have pcsx2 and Dolphin-emu folders in RetroArch's LocalState > system folder."),
	.setTimestamp()
	.setFooter('GoldenSky#4649 | 2022', 'https://i.imgur.com/I2LsE5o.png');
