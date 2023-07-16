const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('테스트')
		.setDescription('룰렛봇이 대답합니다!'),
	async execute(interaction) {
		await interaction.reply('정상 작동합니다!');
	},
};