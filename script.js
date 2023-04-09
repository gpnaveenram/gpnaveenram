const videoContainer = document.querySelector('.videos');
let api_key="AIzaSyCqzcyuMCzhQCJDAsREhPuM-5y-ffhRbaI";
let base_url="https://www.googleapis.com/youtube/v3/videos?";
let channels="https://www.googleapis.com/youtube/v3/channels?";
let channelInfoURL="https://www.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true"

fetch(base_url+ new URLSearchParams({
    key:api_key,
    part:'snippet',
    chart:'mostPopular',
    maxResults:15,
    regionCode:'IN'
   
}))
.then(res => res.json())
.then(data=>{
    data.items.forEach(item=>{
        getChannelIcon(item);
    })
})

const getChannelIcon = (video_data) =>{
    fetch(channels+new URLSearchParams({
    key:api_key,
    part:'snippet',
    id:video_data.snippet.channelId
    }))
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        video_data.channelThumbnail=data.items[0].snippet.thumbnails.default.url;
    })
}

const makeVideoCard = (data) =>{
    console.log(data);
    videoContainer.innerHTML +=`
    <div class="video-tile">
          <div class="video">
               <div class="video_thumbnail">
                <img src="${data.snippet.thumbnails.high.url}">
               </div>
               <div class="info">
                   <div class="channel">
                        <img src="${data.channelThumbnail}"></img>
                   </div>
                   <div class="title">
                       <h3>"${data.snippet.title}"</h3>
                       <a href="">"${data.snippet.channelTitle}"</a>
                       <span>1k Views . 1 Day Ago</span>
                   </div>
               </div>
           </div>
       </div>`;
    
}

const channelInfo = document.querySelector("channelinfo");
const subscriptions = document.querySelector("subscribe");
const useractivity = document.querySelector("useractiviy");
const playlist = document.querySelector("trend"); 
const userplaylist = document.querySelector("Playlist");

channelInfo.addEventListener('click',() =>{
    location.href=channelInfoURL;
})























// var GoogleAuth;
// var SCOPE = 'https://www.googleapis.com/auth/youtube.force-ssl';
// function handleClientLoad() {
//   // Load the API's client and auth2 modules.
//   // Call the initClient function after the modules load.
//   gapi.load('client:auth2', initClient);
// }

// function initClient() {
//   // In practice, your app can retrieve one or more discovery documents.
//   var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest';

//   // Initialize the gapi.client object, which app uses to make API requests.
//   // Get API key and client ID from API Console.
//   // 'scope' field specifies space-delimited list of access scopes.
//   gapi.client.init({
//       'apiKey': 'AIzaSyCqzcyuMCzhQCJDAsREhPuM-5y-ffhRbaI',
//       'clientId': '1025242333938-8a193vupsdkftpf4mpkukv5tumsoslah.apps.googleusercontent.com',
//       'discoveryDocs': [discoveryUrl],
//       'scope': SCOPE
//   }).then(function () {
//     GoogleAuth = gapi.auth2.getAuthInstance();

//     // Listen for sign-in state changes.
//     GoogleAuth.isSignedIn.listen(updateSigninStatus);

//     // Handle initial sign-in state. (Determine if user is already signed in.)
//     var user = GoogleAuth.currentUser.get();
//     setSigninStatus();

//     // Call handleAuthClick function when user clicks on
//     //      "Sign In/Authorize" button.
//     $('#sign-in-or-out-button').click(function() {
//       handleAuthClick();
//     });
//     $('#revoke-access-button').click(function() {
//       revokeAccess();
//     });
//   });
// }

// function handleAuthClick() {
//   if (GoogleAuth.isSignedIn.get()) {
//     // User is authorized and has clicked "Sign out" button.
//     GoogleAuth.signOut();
//   } else {
//     // User is not signed in. Start Google auth flow.
//     GoogleAuth.signIn();
//   }
// }

// function revokeAccess() {
//   GoogleAuth.disconnect();
// }

// function setSigninStatus() {
//   var user = GoogleAuth.currentUser.get();
//   var isAuthorized = user.hasGrantedScopes(SCOPE);
//   if (isAuthorized) {
//     $('#sign-in-or-out-button').html('Sign out');
//     $('#revoke-access-button').css('display', 'inline-block');
//     $('#auth-status').html('You are currently signed in and have granted ' +
//         'access to this app.');
//   } else {
//     $('#sign-in-or-out-button').html('Sign In/Authorize');
//     $('#revoke-access-button').css('display', 'none');
//     $('#auth-status').html('You have not authorized this app or you are ' +
//         'signed out.');
//   }
// }

// function updateSigninStatus() {
//   setSigninStatus();
// }

// function myFunction() {
//     var x = document.getElementById("menu");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

