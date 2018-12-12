/*jslint node: true */
"use strict";

exports.clientName = 'wnt';
exports.minClientVersion = '2.5.0';

// https://console.developers.google.com
exports.pushApiProjectNumber = 0;
exports.pushApiKey = '';

// iOS Push Notifications APNS config
/* exports.APNsAuthKey = ''; // *.p8 filepath or buffer with key itself
exports.keyId = '';
exports.teamId = '';
 */
exports.port = 6611;
//exports.myUrl = 'wss://mydomain.com/bb';
exports.bServeAsHub = true;
exports.bSaveJointJson = true;
exports.bLight = false;

// this is used by wallet vendor only, to redirect bug reports to developers' email
exports.bug_sink_email = 'admin@example.org';
exports.bugs_from_email = 'bugs@example.org';

exports.HEARTBEAT_TIMEOUT = 300*1000;

exports.storage = 'sqlite';


exports.initial_witnesses = [
	'T6K23AQ97TP525ZGLKZAHFY2R6DDRFGJ',
	'4S6HYEAGBVAH9KLZRFFQ3NV4TKUVSMBV',
	'8XUFTVBQVK52C66KDMEYK8GX72AJ5QRN',
	'FP2ZY2RMK6E32CHA3T5PC8K8WF9B7AHP',
	'BAFE5C2VK7A7J5N3TK4ZRBWYTESU9HZD',
	'7492LGGYDYKKRH7ZK2BJWVAYBYECTPME',
	'HPLQK652LEYK63MKT83UJFNX8RMJGCW6',
	'7KPQ9S52C6BT98YWWKX4K8QHGQYB8PN7',
	'W4NMDM6YKDVXEQ72BUZ4D8FMVD3NUATQ',
	'58DKQMWHY72GR4NEZHBGUCU4N97X6483',
	'TNAUBN3BEJPCX43VZS6LT4PH92EB4ESZ',
	'U2JP6Y2YP82ZTV2D5U8C5446VU4DK5NQ'
];

/* new testnet
exports.initial_witnesses = [
	'2FF7PSL7FYXVU5UIQHCVDTTPUOOG75GX',
	'2GPBEZTAXKWEXMWCTGZALIZDNWS5B3V7',
	'4H2AMKF6YO2IWJ5MYWJS3N7Y2YU2T4Z5',
	'DFVODTYGTS3ILVOQ5MFKJIERH6LGKELP',
	'ERMF7V2RLCPABMX5AMNGUQBAH4CD5TK4',
	'F4KHJUCLJKY4JV7M5F754LAJX4EB7M4N',
	'IOF6PTBDTLSTBS5NWHUSD7I2NHK3BQ2T',
	'O4K4QILG6VPGTYLRAI2RGYRFJZ7N2Q2O',
	'OPNUXBRSSQQGHKQNEPD2GLWQYEUY5XLD',
	'PA4QK46276MJJD5DBOLIBMYKNNXMUVDP',
	'RJDYXC4YQ4AZKFYTJVCR5GQJF5J6KPRI',
	'WELOXP3EOA75JWNO6S5ZJHOO3EYFKPIR'
];
*/

exports.initial_peers = [
	'wss://hub.wnt.jp'
];

/* exports.trustedRegistries = {
	'AM6GTUKENBYA54FYDAKX2VLENFZIMXWG': 'market'
};
 */
console.log('finished hub conf');
