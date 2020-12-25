// $(document).ready(() => {
//     let games = [];
//     const getGames = async (c = 1, l = 1, p = 1) => {
//         let bodyReq = {category: c, limit: l, page: p};
//         let response = await fetch('https://paparazzi.games/logic/getActiveGames.php', {
//             method: 'POST',
//             'Content-Type': 'application/json',
//             body: JSON.stringify(bodyReq)
//         });
//         let data = await response.json();
//         data.forEach(game => game ? games.push(game) : false);
//         console.log(games[0])
//         if (games[0]) {
//             let links = $('a');
//             let group = $('.field_group');
//             for (let i = 0; i < games.length; i++) {
//                 games[i] ? links[i].setAttribute('href', games[i].desktopLink) : false;
//                 if (group[i] && games[i]) {
//                     let title = $('.field_group h3 a')[i];
//                     let description = games[i].description || '';
//                     let date = $('.icons li a.post_date')[i];
//                     $('.field_group .pic a')[i].setAttribute('href', games[i].desktopLink);
//                     $('.field_group .pic a img')[i].setAttribute('src', games[i].background);
//                     title.setAttribute('href', games[i].desktopLink);
//                     if (description.length > 128) {
//                         title.innerHTML = description.slice(0, 110) + '... <span class="blue">read more</span>';
//                     } else {
//                         title.innerText = description;
//                     }
//                     date.innerText = games[i].startdate;
//                     date.setAttribute('href', games[i].desktopLink);
//                 }
//                 if ($('.gallery_items_second')[i] && games[i]) {
//                     let title = $('.gallery_items_second h3 a')[i];
//                     let description = games[i].description;
//                     let span = $('.gallery_items_second span.date')[i];
//                     $('.gallery_items_second .pic a')[i].setAttribute('href', games[i].desktopLink);
//                     $('.gallery_items_second .pic a img')[i].setAttribute('src', games[i].background);
//                     title.setAttribute('href', games[i].desktopLink);
//                     if (description.length > 128) {
//                         title.innerHTML = description.slice(0, 80) + '... <span class="blue">read more</span>';
//                     } else {
//                         title.innerText = description;
//                     }
//                     span.innerText = games[i].startdate;
//                     span.setAttribute('href', games[i].desktopLink);
//                 }
//             }
//
//             await (function () {
//                 let randomGames1 = (Math.round(Math.random() * games.length || 1) - 1) < 0 ? 0 : Math.round(Math.random() * games.length || 1) - 1;
//                 // console.log(randomGames1)
//                 $('.main-content_top_text h4').text(games[randomGames1].title || 'no title');
//                 $('.main-content_top_text p').text(games[randomGames1].description);
//                 $('img.main-content_img').attr('src', games[randomGames1].background);
//                 $('.main-content_img span').text(games[randomGames1].title || 'no title');
//
//                 let randomGames2 = (Math.round(Math.random() * games.length || 1) - 1) < 0 ? 0 : Math.round(Math.random() * games.length || 1) - 1;
//                 // console.log(randomGames2)
//                 $('.main-right_img .widget_header  .widget_title').text(games[randomGames2].title || 'no title');
//                 $('.main-right_img a')[0].setAttribute('href', games[randomGames2].desktopLink);
//                 $('.main-right_img a img')[0].setAttribute('src', games[randomGames2].background);
//                 $('.banner-mobile .main-right_img .main_right_text a').text(games[randomGames2].description);
//                 $('.banner-mobile .main-right_img .main_right_text a')[0].setAttribute('href', games[randomGames2].desktopLink);
//
//                 let randomGames3 = (Math.round(Math.random() * games.length || 1) - 1) < 0 ? 0 : Math.round(Math.random() * games.length || 1) - 1;
//                 // console.log(randomGames3)
//                 $('.banner-mobile .main-right_img a')[0].setAttribute('href', games[randomGames3].desktopLink);
//                 $('.banner-mobile a img')[0].setAttribute('src', games[randomGames3].background);
//
//                 let randomGames4 = (Math.round(Math.random() * games.length || 1) - 1) < 0 ? 0 : Math.round(Math.random() * games.length || 1) - 1;
//                 // console.log(randomGames4)
//                 $('.main-right_block.right-banner a')[0].setAttribute('href', games[randomGames4].desktopLink);
//                 $('.main-right_block.right-banner a img')[0].setAttribute('src', games[randomGames4].background);
//
//                 let randomGames5 = (Math.round(Math.random() * games.length || 1) - 1) < 0 ? 0 : Math.round(Math.random() * games.length || 1) - 1;
//                 // console.log(randomGames5)
//                 $('.main-right_block.right-banner .main-right_img  a')[0].setAttribute('href', games[randomGames5].desktopLink);
//                 $('.main-right_block.right-banner .main_right_text  a').text(games[0].title || 'no title');
//                 $('.main-right_block.right-banner .main-right_img  a img')[0].setAttribute('src', games[randomGames5].background);
//             })()
//
//             $('#main').show()
//         } else {
//             $('#main').hide();
//         }
//     }
//     getGames(10, 99, 1);
//     getGames(11, 99, 1);
//     getGames(12, 99, 1);
//     getGames(13, 99, 1);
//     getGames(15, 1, 1);
// });
//

new Vue({
    el: '#root',
    data: {
        games: []
    },
    methods: {
        async getGames(c = 1, l = 1, p = 1) {
            let bodyReq = {category: c, limit: l, page: p};
            let response = await fetch('https://paparazzi.games/logic/getActiveGames.php', {
                method: 'POST',
                'Content-Type': 'application/json',
                body: JSON.stringify(bodyReq)
            });
            let data = await response.json();
            data.forEach(game => game ? this.games.push(game) : false);
            console.log(this.games)
        }
    },
    mounted: () =>{
        this.getGames(15, 99, 1)
        console.log(this.games)
    }
})
