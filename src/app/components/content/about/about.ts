import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'about',
	imports: [TitleCasePipe],
	templateUrl: './about.html',
})
export class About {
	mediaList = [
		{
			id: 'boardgame',
			name: 'Tapestry',
			pictureUrl:
				'https://cf.geekdo-images.com/7kqDmkUMGxXHr1wNPA7Gvg__imagepagezoom/img/zLcx71a4tUl5tKUzYhMWX7QZZDs=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic4884996.jpg',
			url: 'https://boardgamegeek.com/boardgame/286096/tapestry',
			source: 'Stonemaier Games',
		},
		{
			id: 'book',
			name: 'Pense em Phlebas',
			pictureUrl:
				'https://m.media-amazon.com/images/I/81Ss7W7WI+L._AC_UF1000,1000_QL80_.jpg',
			url: 'https://a.co/d/gfAEj1y',
			source: 'Iain M. Banks',
		},
		{
			id: 'music',
			name: '(Album) Hollow World',
			pictureUrl:
				'https://i.scdn.co/image/ab67616d0000b2732de956c29e983ef5667e78f9',
			url: 'https://open.spotify.com/intl-pt/album/1X7hgRvsPzxBrc0Q3HC719',
			source: 'Kill The Noise',
		},
	];
}
