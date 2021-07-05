import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/DataService.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

breed;
list_breed=["Choose a Breed ","affenpinscher","african","airedale","akita","appenzeller"];
isButtonDisabled = true;


  constructor(private dataser: DataService) { }

  ngOnInit(): void {
 
  
  }
onSubmit(){
 this.dataser.getDogByBreed(this.breed).subscribe(res=>{
  this.dataser.photoLink.next(res);
 });
}

selectchange(args){ 
this.breed=args.target.value;

this.disableButton();

}
disableButton()
{
  if(this.breed===this.list_breed[0])
  {
    this.isButtonDisabled = true;
  } else {
    this.isButtonDisabled = false;
  }
  
}

}
