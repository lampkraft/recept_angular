import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ImageUploadService } from '../../services/image-upload.service';
import { IRecipeImage } from 'src/app/models/recipe';

@Component({
  selector: 'recept-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.less']
})
export class ImageUploaderComponent implements OnInit {
  @Input() uploadedImages: IRecipeImage[] = [];
  @Output() uploadImage: EventEmitter<FileList> = new EventEmitter()
  @Output() deleteImage: EventEmitter<string> = new EventEmitter()
  @Input() readOnly: boolean;
  @Input() loading: boolean;

  constructor(private imageUploadService: ImageUploadService) { }

  ngOnInit() {
  }

  onUpload(files: FileList): void {
    this.uploadImage.emit(files);
  }

  onDeleteImage(id: string): void {
    this.deleteImage.emit(id);
  }

  onImageLoad (imageElement: any) {
    const formattedSize = this.imageUploadService.getFormattedImageSize(imageElement.width, imageElement.height);
    imageElement.style.width = formattedSize.width;
    imageElement.style.height = formattedSize.height;
  }
}
