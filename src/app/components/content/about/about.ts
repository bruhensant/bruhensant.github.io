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
			name: 'Expeditions',
			pictureUrl:
				'https://cf.geekdo-images.com/jZWHWTE9YN7N9OEXdqzFcw__imagepage/img/hYPnC6P8e124Oe94s4pXrmiUJ7c=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7327709.png',
			url: 'https://boardgamegeek.com/boardgame/379078/expeditions',
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
			name: '(Album) Embrace',
			pictureUrl:
				'https://i.scdn.co/image/ab67616d0000b2734d51a157fbe1ceb35a2be30f',
			url: 'https://open.spotify.com/intl-pt/album/3QnqZrz7k2KCutkHSzfV4M',
			source: 'Kill The Noise',
		},
	];
}
