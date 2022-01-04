const { SlashCommandBuilder } = require('@discordjs/builders');
let LeagueAPI = require('leagueapiwrapper');
//LeagueAPI = new LeagueAPI(LOL_API, Region.NA);


module.exports = {
	data: new SlashCommandBuilder()
		.setName('rank')
		.setDescription('Shows my rank on my accounts (only links opgg, use !rank instead)'),
	async execute(interaction) {
		await interaction.reply(`Here are my opggs: https://na.op.gg/multi/query=nikkone%2Cmaithaei`);
	},
};