type kit = { nameTrigger: string; url: string };
type bank = { name: string; kit: kit[] };

export const bankOne: bank = {
	name: 'Heater Kit',
	kit: [
		{ nameTrigger: 'Heater - 1', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
		{ nameTrigger: 'Heater - 2', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
		{ nameTrigger: 'Heater - 3', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
		{ nameTrigger: 'Heater - 4', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
		{ nameTrigger: 'Clap', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
		{ nameTrigger: 'Open - HH', url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
		{ nameTrigger: "Kick-n'-Hat", url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
		{ nameTrigger: 'Kick', url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
		{ nameTrigger: 'Closed - HH', url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' },
	],
};
export const bankTwo: bank = {
	name: 'Smooth Piano Kit',
	kit: [
		{ nameTrigger: 'Chord - 1', url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3' },
		{ nameTrigger: 'Chord - 2', url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3' },
		{ nameTrigger: 'Chord - 3', url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3' },
		{ nameTrigger: 'Shaker', url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3' },
		{ nameTrigger: 'Open - HH', url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3' },
		{ nameTrigger: 'Closed - HH', url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3' },
		{ nameTrigger: 'Punchy - Kick', url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3' },
		{ nameTrigger: 'Side - Stick', url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3' },
		{ nameTrigger: 'Snare', url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3' },
	],
};
