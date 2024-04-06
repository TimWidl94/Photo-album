import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { PhotoSectionComponent } from '../photo-section/photo-section.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [HeaderComponent, PhotoSectionComponent, CommonModule ],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss',
})
export class LandingpageComponent {}
