import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../Services/DataService.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit, OnDestroy {
imageSource;
loader:boolean=true;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    
    this.dataService.getPhotoLink().subscribe(res => {
      this.imageSource=res;
      this.loader=false;
     
    });
  }

  ngOnDestroy() {
    this.dataService.setBreedName();
  }


}
