import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Photo } from './../photo.info/photos';

@Component({
  selector: 'app-photo-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo-section.component.html',
  styleUrl: './photo-section.component.scss'
})
export class PhotoSectionComponent implements OnInit{

  photos:any

  ngOnInit(): void {
    this.photos = new Photo();
  }

}

