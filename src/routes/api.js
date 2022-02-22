// import SpotifyWebApi from 'spotify-web-api-node';

// // credentials are optional
// var spotifyApi = new SpotifyWebApi({
// 	clientId: '28a0aae0ea864d82b77927614ded505b',
// 	clientSecret: '4ce391da0560465abe9d67374c95e165',
// 	redirectUri: 'http://localhost:3000/callback'
// });

// const refresh_token =
// 	'AQAZtPYvAa5JUNieNg7MSU4TKXrZwKaaGtGl0xX0cYCTvXcakByRfFFJV62sOfbZNWqfH3K-SkUZmbuwW_Q3-TMNfkERBBiNGBpgYrx666zua-G3cydbocjenOleGEQEhZE';

// spotifyApi.setRefreshToken(refresh_token);

// spotifyApi.refreshAccessToken().then(
// 	function (data) {
// 		console.log('The access token has been refreshed!');

// 		// Save the access token so that it's used in future calls
// 		spotifyApi.setAccessToken(data.body['access_token']);
// 	},
// 	function (err) {
// 		console.log('Could not refresh access token', err);
// 	}
// );

// export const currentlyPlaying = () => {
// 	return spotifyApi.getMyRecentlyPlayedTracks({
// 		limit: 1
// 	});
// };

import SpotifyWebApi from 'spotify-web-api-node';

const refresh_token =
	'AQAZtPYvAa5JUNieNg7MSU4TKXrZwKaaGtGl0xX0cYCTvXcakByRfFFJV62sOfbZNWqfH3K-SkUZmbuwW_Q3-TMNfkERBBiNGBpgYrx666zua-G3cydbocjenOleGEQEhZE';

var spotifyApi = new SpotifyWebApi({
	clientId: '28a0aae0ea864d82b77927614ded505b',
	clientSecret: '4ce391da0560465abe9d67374c95e165',
	redirectUri: 'http://localhost:3000/callback'
});

spotifyApi.setRefreshToken(refresh_token);

async function refreshTokenSetup() {
	console.log('hello world');
	let data = await spotifyApi.refreshAccessToken();
	let access_token = data.body['access_token'];
	let expires_in = data.body['expires_in'];
	console.log(data);

	console.log('The access token has been refreshed!');
	console.log('access_token:', access_token);
	updateTokens(access_token, refresh_token);
}

function updateTokens(at, rt) {
	spotifyApi.setAccessToken(at);
	spotifyApi.setRefreshToken(rt);
	console.log('Access Token and Refresh Token Updated!!!');
}

async function refreshAccessToken() {
	const data = await spotifyApi.refreshAccessToken();
	const access_token = data.body['access_token'];
	console.log('The access token has been refreshed!');
	console.log('access_token:', access_token);
	updateTokens(access_token, refresh_token);
}

export async function get() {
	let song;
	let songItems;
	await refreshAccessToken();
	song = await spotifyApi.getMyRecentlyPlayedTracks({
		limit: 1
	});
	songItems = song.body.items[0];
	return {
		body: songItems.track
	};
}
