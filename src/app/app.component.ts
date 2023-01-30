import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'day35-cors'

  itemsPerPage = [1,2,3,4,5,6,7,8,9,10]
  noPerPage!: number
  form!: FormGroup

  constructor(private fb: FormBuilder){
  }

  ngOnInit(): void {
    this.form = this.createForm()
  }

  createForm(){
    return this.fb.group({
      noOfPages : this.fb.control<number>(10)
    })
  }

  changeNoOfPages(){
    this.noPerPage = this.form.value["noOfPages"]
    console.info("change no of pages >>>>>>>",this.noPerPage)
  }
}
