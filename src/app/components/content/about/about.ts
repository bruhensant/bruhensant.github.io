import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'about',
	imports: [TitleCasePipe, DatePipe],
	templateUrl: './about.html',
})
export class About {
	
	lastUpdate = new Date('05/02/2026').toLocaleDateString('pt-BR');
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
			name: '(Album) In Death We Just Begun',
			pictureUrl:
				'https://i.scdn.co/image/ab67616d0000b273423a6720587a664a2b5b223c',
			url: 'https://open.spotify.com/intl-pt/album/6lQSombsKLtAaoJzlkU9xf',
			source: 'Ryan Lott - Poppy - Son Lux',
		},
	];
}
