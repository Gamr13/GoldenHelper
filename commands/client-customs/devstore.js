const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");


module.exports = {
    data: new SlashCommandBuilder()
        .setName('devstore')
        .setDescription('Get links to a ton of Dev Mode apps!'),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}

const exampleEmbed = new EmbedBuilder()
	.setColor('#FFD700')
	.setTitle('Dev Mode Store')
	.setAuthor({name: 'GoldenHelper', iconURL:"https://i.imgur.com/o7MkhhK.png"})
	.setDescription('Welcome to the Dev Mode Store! Here you can get links to a ton of .appx files for dev mode!')
	.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: 'RetroArch', value: '[Download](https://drive.google.com/drive/folders/1vkiYvIObU6T1DvYbIE3uEFsHb39jkBio?usp=sharing)', inline: true },
		{ name: 'DurangoFTP', value: '[Download](https://github.com/Dantes-Dungeon/DURANGO-FTP/releases)', inline: true },
		{ name: 'ADV File Explorer Ex', value: '[Download](https://www.mediafire.com/file/2kuk79p111f9mm1/Adv_File_Explorer_Ex_%2528v1.6.6.0%2529.7z/file)', inline: true },
		{ name: 'PPSSPP', value: '[Download](https://drive.google.com/drive/folders/1LCXnJcauEhKgX5Klvwm8ErEo2qu0EJWL?usp=sharing)', inline: true },
		{ name: 'Flycast', value: '[Download](https://github.com/flyinghead/flycast/releases)', inline: true },
		{ name: 'XBSX2', value: '[Download](https://github.com/TheRhysWyrill/PCSX2/releases)', inline: true },
		{ name: 'Retrix Gold', value: '[Download](https://github.com/Aftnet/RetriX/releases)', inline: true },
		{ name: 'Kodi', value: '[Download](http://mirrors.kodi.tv/nightlies/windows/uwp64/)', inline: true },
		{ name: 'DevilutionX', value: '[Download](https://github.com/diasurgical/devilutionX/releases)', inline: true },
		{ name: 'Heart of Darkness', value: '[Download](https://github.com/tuxuser/hode/releases)', inline: true },
		{ name: 'OpenLara', value: '[Download](https://github.com/XProger/OpenLara/releases)', inline: true },
		{ name: 'Relic Hunters Zero', value: '[Download](https://github.com/MDashK/Relic-Hunters-Zero-Xbox/releases)', inline: true },
		{ name: 'Prince of Persia', value: '[Download](https://github.com/Xbox-Homebrew/SDLPoP/releases)', inline: true },
		{ name: 'VVVVVV', value: '[Download](https://github.com/Xbox-Homebrew/DURANGO-V6/releases)', inline: true },
		{ name: 'Sonic 1 SMS Remake', value: '[Download](https://github.com/MDashK/sonic-1-sms-remake-xbox/releases)', inline: true },
		{ name: 'Sonic 2 SMS Remake', value: '[Download](https://github.com/MDashK/sonic-2-sms-remake-xbox/releases)', inline: true },
		{ name: 'Sonic Time Twisted', value: '[Download](https://www.mediafire.com/file/74shtqbyzr4q2dg/Sonic_Time_Twisted_%255BUnofficial%255D_%2528v1.1.2.0%2529.appx/file)', inline: true },
	)
	.setTimestamp()