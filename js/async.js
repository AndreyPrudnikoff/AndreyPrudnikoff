$(document).ready(() => {
    let games = [];
    const getGames = async (c = 1, l = 1, p = 1) => {
        let bodyReq = {category: c, limit: l, page: p};
        let response = await fetch('https://paparazzi.games/logic/getActiveGames.php', {
            method: 'POST',
            'Content-Type': 'application/json',
            body: JSON.stringify(bodyReq)
        });
        let data = await response.json();
        data.forEach(game => games.push(game));
        let links = $('a');
        let group = $('.field_group');
        for (let i = 0; i < links.length; i++) {
            games[i] ? links[i].setAttribute('href', games[i].desktopLink) : false;
            if (group[i]) {
                let title = $('.field_group h3 a')[i];
                let description = games[i].description;
                let date = $('.icons li a.post_date')[i];
                $('.field_group .pic a')[i].setAttribute('href', games[i].desktopLink);
                $('.field_group .pic a img')[i].setAttribute('src', games[i].background);
                title.setAttribute('href', games[i].desktopLink);
                if (description.length > 128) {
                    title.innerHTML = description.slice(0, 128) + '... <span class="blue">read more</span>';
                } else {
                    title.innerText = description;
                }
                date.innerText = games[i].startdate;
                date.setAttribute('href', games[i].desktopLink);
            }
            if ($('.gallery_items_second')[i]) {
                let title = $('.gallery_items_second h3 a')[i];
                let description = games[i].description;
                let span = $('.gallery_items_second span.date')[i];
                $('.gallery_items_second .pic a')[i].setAttribute('href', games[i].desktopLink);
                $('.gallery_items_second .pic a img')[i].setAttribute('src', games[i].background);
                title.setAttribute('href', games[i].desktopLink);
                if (description.length > 128) {
                    title.innerHTML = description.slice(0, 128) + '... <span class="blue">read more</span>';
                } else {
                    title.innerText = description;
                }
                span.innerText = games[i].startdate;
                span.setAttribute('href', games[i].desktopLink);
            }
        }
        $('.main-content_top_text h4').text(games[0].title || 'no title');
        $('.main-content_top_text p').text(games[0].description);
        $('img.main-content_img').attr('src', games[0].background);
        $('.main-content_img span').text(games[0].title || 'no title');

        $('.main-right_img .widget_header  .widget_title').text(games[1].title || 'no title');
        $('.main-right_img a')[0].setAttribute('href', games[1].desktopLink);
        $('.main-right_img a img')[0].setAttribute('src', games[1].background);
        $('.banner-mobile .main-right_img .main_right_text a').text(games[1].description);
        $('.banner-mobile .main-right_img .main_right_text a')[0].setAttribute('href', games[1].desktopLink);

        $('.banner-mobile .main-right_img a')[0].setAttribute('href', games[2].desktopLink);
        $('.banner-mobile a img')[0].setAttribute('src', games[2].background);

        $('.main-right_block.right-banner a')[0].setAttribute('href', games[5].desktopLink);
        $('.main-right_block.right-banner a img')[0].setAttribute('src', games[5].background);

        $('.main-right_block.right-banner .main-right_img  a')[0].setAttribute('href', games[6].desktopLink);
        $('.main-right_block.right-banner .main_right_text  a').text(games[0].title || 'no title');
        $('.main-right_block.right-banner .main-right_img  a img')[0].setAttribute('src', games[6].background);
    }
    getGames(15, 99, 1);
})
