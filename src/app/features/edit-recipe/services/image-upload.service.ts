import { Injectable } from '@angular/core';

@Injectable()
export class ImageUploadService {
	constructor () {

	}

	getFormattedImageSize (width: number, height: number): { width: string, height: string } {
		if (height > width) {
			return { width: '100%', height: 'auto' };
		}
		if (height < width) {
			return { width: 'auto', height: '100%' };
		}
		return { width: '100%', height: '100%' };
	}

	browseImage (): string {
		// Open browsing files
		return;
	}

	getImageDataWithoutMetadata (data: string): string {
		return data.split('data:image/jpeg;base64,')[1];
	}

	getImageFileData (file: File) {
		const temporaryFileReader = new FileReader();
		return new Promise((resolve, reject) => {
			temporaryFileReader.onerror = () => {
			temporaryFileReader.abort();
			reject(new DOMException("Problem parsing input file."));
			};
		
			temporaryFileReader.onload = () => {
			resolve(temporaryFileReader.result);
			};
			temporaryFileReader.readAsDataURL(file);
		});
	}
}