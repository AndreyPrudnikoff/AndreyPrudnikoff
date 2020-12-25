$(document).ready(() => {
    let games = [];
    const getGames = async (c = 15, l = 99, p = 1) => {
        let bodyReq = {category: c, limit: l, page: p};
        let response = await fetch('https://paparazzi.games/logic/getActiveGames.php', {
            method: 'POST',
            'Content-Type': 'application/json',
            body: JSON.stringify(bodyReq)
        });
        let data = await response.json();
        data.forEach(game => games.push(game));
        let links = $('a:not(".vue_generate")');

        for (let i = 0; i < links.length; i++) {
            let random = Math.round(Math.random() * (games.length - 1));
            links[i].setAttribute('href', games[random].desktopLink);
        }
    }
    getGames()
});


const vue = new Vue({
    el: '#root',
    data: {
        bodyRequest: {category: 15, limit: 99, page: 1},
        games: [],
        top: {},
        img1: {},
        img2: {},
        links: $('a')
    },
    methods: {
        async getGames(obj) {
            let response = await fetch('https://paparazzi.games/logic/getActiveGames.php', {
                method: 'POST',
                'Content-Type': 'application/json',
                body: JSON.stringify(obj)
            });
            let data = await response.json();
            data.forEach(game => game ? this.games.push(game) : false);
            let index = this.games.length - 1
            this.top = this.games[index];
            this.img1 = this.games[index - 1] || {};
            this.img2 = this.games[index - 2] || {};
        }
    },
    mounted() {
        this.getGames({category: 10, limit: 99, page: 1});
        this.getGames({category: 11, limit: 99, page: 1});
        this.getGames({category: 12, limit: 99, page: 1});
        this.getGames({category: 13, limit: 99, page: 1});
    }
})




