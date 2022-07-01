// discord.js 가져오기
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// 새 클라이언트 인스턴스 생성
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// 클라이언트가 준비되면 코드 실행
client.once('ready', () => {
	console.log('봇이 준비되었습니다!');
});

// 상호작용하기
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === '안녕') {
		await interaction.reply('안녕!');
	}
});

// 토큰으로 로그인
client.login(token);