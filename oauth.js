window.onload = function () {
    document.querySelector('button').addEventListener('click', function () {
        

        //     //git hub
        //     var CALLBACK_URL = 'https://'+chrome.runtime.id+'.chromiumapp.org';
        // var AUTH_URL = 'https://github.com/login/oauth/authorize/?client_id='+CLIENT_ID+'&redirect_uri='+CALLBACK_URL+'&scope=notifications';
         
        // // Opens a window to initiate GitHub OAuth, fires callback
        // // with token in the URL.
        // chrome.identity.launchWebAuthFlow({
        // url: AUTH_URL,
        // interactive: true,
        // }, function(redirectURL) {
        // var q = redirectURL.substr(redirectURL.indexOf('#')+1);
        // var parts = q.split('&');
        // for (var i = 0; i < parts.length; i++) {
        //     var kv = parts[i].split('=');
        //     if (kv[0] == 'access_token') {
        //     token = kv[1];
        //     console.log('token is', token);
        //     }
        // }
        // });



        // var auth_url = 'http://localhost/chrome-oauth/web.html?';
        // working upto some extend
        // var client_id = '138829782657-d53b6nfh1efrjelk0lj74rgm5n61l2pm.apps.googleusercontent.com';  // must be Web Application type
        // var auth_url = 'https://accounts.google.com/o/oauth2/auth';
        // var scopes = ['profile'];
        // auth_url += `?client_id=${client_id}`
        // auth_url += `&response_type=token`
        // auth_url += `&redirect_uri=${encodeURIComponent('http://localhost:3000/callback/')}`
        // auth_url += `&scope=${encodeURIComponent(scopes.join(' '))}`
        
        // chrome.identity.launchWebAuthFlow({url: auth_url, interactive: true}, function(responseUrl) { 
        //     console.log(responseUrl); alert(responseUrl);
        // });


        chrome.identity.getAuthToken({interactive: true }, function (token) {
            console.log(token);

            let init = {
                method: 'GET',
                async: true,
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json'
                },
                'contentType': 'json'
            };

            fetch(
                'https://people.googleapis.com/v1/contactGroups/all?maxMembers=20&key=AIzaSyBVHU5jf_Y84OeCH-M3yseVaWLpZx1CgRk',
                init)
                .then((response) => response.json())
                .then(function (data) {
                    console.log(data)

                    let photoDiv = document.querySelector('#friendDiv');
                    let returnedContacts = data.memberResourceNames;

                    for (let i = 0; i < returnedContacts.length; i++) {
                        fetch(
                            'https://people.googleapis.com/v1/' + returnedContacts[i] +
                                '?personFields=photos&key=AIzaSyBVHU5jf_Y84OeCH-M3yseVaWLpZx1CgRk',
                            init)
                            .then((response) => response.json())
                            .then(function(data) {
                              let profileImg = document.createElement('img');
                              profileImg.src = data.photos[0].url;
                              photoDiv.appendChild(profileImg);
                            });
                    }

                });
        });
    });
};

// function onSignIn(googleUser) {
//     // Useful data for your client-side scripts:
//     var profile = googleUser.getBasicProfile();
//     console.log("ID: " + profile.getId()); // Don't send this directly to your server!
//     console.log('Full Name: ' + profile.getName());
//     console.log('Given Name: ' + profile.getGivenName());
//     console.log('Family Name: ' + profile.getFamilyName());
//     console.log("Image URL: " + profile.getImageUrl());
//     console.log("Email: " + profile.getEmail());

//     // The ID token you need to pass to your backend:
//     var id_token = googleUser.getAuthResponse().id_token;
//     console.log("ID Token: " + id_token);
// }

//   const CLIENT_ID = '138829782657-d53b6nfh1efrjelk0lj74rgm5n61l2pm.apps.googleusercontent.com';
// function googleInit()  // you can call this anything (change in URL)
// { console.log('googleInit');
//     gapi.load('auth2', () => {
//         console.log('auth2');
//         gapi.auth2.init({ client_id: CLIENT_ID }).then(() => {
// console.log('dfdf');
//             // DO NOT ATTEMPT TO RENDER BUTTON UNTIL THE 'Init' PROMISE RETURNS
//             // renderButton();

//         });
//     });
// }

// function renderButton() {
//     gapi.signin2.render('myGoogleButton', {
//        'scope': 'profile email',
//        'width': 240,
//        'height': 40,
//        'longtitle': true,
//        'theme': 'dark',
//        'onsuccess': () => {},
//        'onfailure': () => {}
//    });
// }

