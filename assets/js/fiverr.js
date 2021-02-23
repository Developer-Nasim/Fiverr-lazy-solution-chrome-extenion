"use strict"

    let audio = document.createElement('AUDIO');
    audio.src = "https://github.com/Developer-Nasim/audio/raw/main/get-outta-here-505.mp3";
    document.body.appendChild(audio);

    setInterval(() => { 
        let fiFavico1 = document.querySelectorAll('[rel="icon"]');
        let fiFavico2 = document.querySelector('[rel="shortcut icon"]');
        let fiFavico3 = document.querySelectorAll('[rel="apple-touch-icon"]');
        let fHeader  = document.querySelector('.fiverr-header');
        let fiMain   = document.querySelector('#main-wrapper');
        let fibody   = document.querySelector('.mp-box');
        let unread   = document.querySelector('.unread');
        if (unread) { 
            if (fHeader && fibody && fiMain) {
                fHeader.style.background = "red";
                fibody.style.background = "red";
                fiMain.style.background = "red";
                
            }
            audio.play();
            if (fiFavico1 && fiFavico2 && fiFavico3) { 
                fiFavico1.forEach(fv => {
                    fv.href = "https://i.ibb.co/3Cq3DBM/fiverr-notif.png";
                })
                fiFavico2.href = "https://i.ibb.co/3Cq3DBM/fiverr-notif.png"
                fiFavico3.forEach(fv => {
                    fv.href = "https://i.ibb.co/3Cq3DBM/fiverr-notif.png";
                })
            }
        }else{

            if (fHeader && fibody && fiMain) { 
                fHeader.style.background = "#fff";
                fibody.style.background = "#f7f7f7";
                fiMain.style.background = "#f7f7f7"; 
            }
            if (fiFavico1 && fiFavico2 && fiFavico3) { 
                fiFavico1.forEach(fv => {
                    fv.href = "https://assetsv2.fiverrcdn.com/assets/favicon-32x32-23d4a3fd56a87eaf5a93ddf35a220811.png";
                })
                fiFavico2.href = "https://assetsv2.fiverrcdn.com/assets/favicon-32x32-23d4a3fd56a87eaf5a93ddf35a220811.png";
                fiFavico3.forEach(fv => {
                    fv.href = "https://assetsv2.fiverrcdn.com/assets/v2_globals/apple-touch-icon-60x60-53e90301118fc50953b15292ed68d529.png";
                })
            }
 

        }
 
    }, 1);


    setInterval(() => {
        let unreaded   = document.querySelector('.unread');
        if (unreaded) { 
            function Notif(){
                const notif = new Notification('A new message/notification from Fiverr', {
                    body: "Hey you have new message/notification from fiverr,, please click to check your profile to set that",
                    'icon': 'https://i.ibb.co/hF9y4tP/icon90.png'
                });
                notif.onclick = (e) => {
                    window.location.href = 'https://lh3.googleusercontent.com/';
                }
            }

            if (Notification.permission === 'granted') {
                Notif();
            }else if (Notification.permission !== 'denied') {
                Notification.requestPermission().then(permission => {
                    if (permission === 'granted') {
                        Notif();
                    }
                })
            }
            audio.currentTime = 0;
            audio.play();
        }
    }, 1000);
