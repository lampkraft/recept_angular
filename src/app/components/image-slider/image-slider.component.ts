import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { IRecipeImage } from 'src/app/models/recipe';

@Component({
	selector: 'recept-image-slider',
	templateUrl: 'image-slider.component.html',
	styleUrls: ['image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
	@Input() images: IRecipeImage[];
	@Input() loading: boolean;
	currentImageIndex: number = 0;
	sliderTimer;
	sliderInterval: number = 3000;

	constructor() { }

	ngOnInit() {
		this.sliderTimer = setInterval(() => {
			this.nextImage();
		}, this.sliderInterval);
	}

	nextImage (userTriggered?: boolean) {
		if (userTriggered) {
			this.restartTimer();
		}
		if (this.currentImageIndex < this.images.length - 1) {
			this.currentImageIndex++;
		} else {
			this.currentImageIndex = 0;
		}
	}

	prevImage (userTriggered?: boolean) {
		if (userTriggered) {
			this.restartTimer();
		}
		if (this.currentImageIndex > 0) {
			this.currentImageIndex--;
		} else {
			this.currentImageIndex = this.images.length - 1;
		}
	}

	goToImage (index: number) {
		this.currentImageIndex = index;
		this.restartTimer();
	}

	restartTimer () {
		clearInterval(this.sliderTimer);
		this.sliderTimer = setInterval(() => {
			this.nextImage();
		}, this.sliderInterval);
	}
}