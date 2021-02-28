let userToken;
let expiresIn;
const clientId = '941fe4f384db41bc858ad2cb656b1aae';
const redirectUri = "http://localhost:3000/"

let Spotify = {
    getAccessToken: () => {
        if(userToken){
            return userToken
        } 
        
        //check for access token match
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/ )
        

        if(accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1]
            expiresIn = Number(expiresInMatch[1])

            window.setTimeout(() => userToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
            window.location.href = accessUrl
        }

    }
}

export default Spotify;