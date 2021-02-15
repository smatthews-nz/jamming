let userToken;
let expiresIn;
const clientId = '941fe4f384db41bc858ad2cb656b1aae';
const redirectUri = "http://localhost:3000/"

let Spotify = {
    getAccessToken: () => {
        if(userToken){
            return userToken
        } else if(window.location.href.match(/access_token=([^&]*)/) && window.location.href.match(/expires_in=([^&]*)/ )){
            userToken = window.location.href(/access_token=([^&]*)/)
            expiresIn = window.location.href(/expires_in=([^&]*)/)

            window.setTimeout(() => userToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
        } else {
            window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
        }
    }
}

export default Spotify;