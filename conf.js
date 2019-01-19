/*jslint node: true */
"use strict";

exports.clientName = 'wnt';
exports.minClientVersion = '1.0.0';

// https://console.developers.google.com
exports.pushApiProjectNumber = 0;
exports.pushApiKey = '';

// iOS Push Notifications APNS config
exports.APNsAuthKey = ''; // *.p8 filepath or buffer with key itself
exports.keyId = '';
exports.teamId = '';

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
    "26UBWG43M5TZH2LIQXKLKTOYQOAWKZKD",
    "64NRIFMEKLAINVV3RU4LTSBWCTCCXKMP",
    "AFHFVK7MCNZQXZSAHUKVLEKHLYDVWF5U",
    "DVHELUGYEQVDS3XXQQBMQAP5SZEHLD7V",
    "IGRAP7NP5PFQJBYQC6A3ZEHCZTZCYVJT",
    "LFLE4R5AGHPRNPY7E6N5C4PSNGK5BGLQ",
    "LZEONBYCLOY5QQIR6DJOVQYYIKSD4JIJ",
    "NSPYU5GWHS6ZGCCCQPJUUY3JJAJJXYE7",
    "NTCTBQPIWSWE37GNUXJ5A4BULWILFUVK",
    "OKDBBKHZ32X3UDZI3VRQXTCJ5FGRK476",
    "RNELLOCUQHUJQ3D2YIJKK4KH47F5X6TL",
    "TQD47JVUV3BNHWSTEIUGXKQ3WMWNQ3A6"
];

/* testnet
exports.initial_witnesses = [
	'3HNHMZCCPINTBGJHDP6UAT53IB4WNAD2',
	'3PICZP4I4GVKW767CV3RKQXEXOIPHB7F',
	'A5ZRRMKHFBY35LPEII3H7DYVTQX3OSLE',
	'BW4X7A5FUALRVJMIPV5C6FUMFYSHSPVV',
	'F34S5JKFLXSBRFXWSULFIU4IGZAUFWZW',
	'JLS6RBASYAM5DF2ZZ6L2CHFEUMETW4UM',
	'LUGMHIRFQ5Y4JNFBMZ7EHFDRYECASCJU',
	'OD6FZRMAYVEE5YACRIFZSYFZXO4FUIL2',
	'Q7XMC3GXPWALIBMGYIDZQCNAINCFA5XX',
	'XMKZO4QD7Y2FD6CKVGV6MOJ7ALM2PMV4',
	'XVNA2DMK7P4TMFLVB6M5DSBC7Q4DLZBS',
	'XYEPISY7WPZWOO3TTOCPNW6IFCZI3CN2'
];
*/


exports.initial_peers = [
	'wss://hub.worldnuqumoritytransporters.com'
];

exports.trustedRegistries = {
	'AM6GTUKENBYA54FYDAKX2VLENFZIMXWG': 'market'
};

console.log('finished hub conf');
