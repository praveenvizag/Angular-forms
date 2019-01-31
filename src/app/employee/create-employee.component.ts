import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      skills: new FormGroup({
        skillName: new FormControl(),
        experience: new FormControl(),
        profeciency: new FormControl()
      })

    });


  }
//patch value can update what ever provided
  loadData(): void {
    this.employeeForm.patchValue({
      fullName: "Praveen",
      email: "Praveen.konchada@gmail.com",
      skills: {
        skillName: "java",
        experience: "4 years",
        profeciency: "intermediate"
      }

    });
  }
// set value needs all values to popultaed
  loadDataUsingsetValue(): void {
    this.employeeForm.setValue({
      fullName: "Praveen",
      email: "Praveen.konchada@gmail.com",
      skills: {
        skillName: "java",
        experience: "4 years",
        profeciency: "intermediate"
      }

    });
  }
  onSubmit(): void {

    console.log(this.employeeForm.get('fullName').value);
    console.log(this.employeeForm.controls.email.value);

  }

  resetData():void {
    this.employeeForm = null;
  }
}
