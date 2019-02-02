import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  pattern:Boolean = true;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      fullName: ['Praveen', [Validators.required, Validators.minLength(2), Validators.maxLength(15),Validators.pattern("[a-zA-Z ]*")
      ]],
        email: ['praveen.konchada@gmail.com'],
        skills: this.fb.group({
          skillName: ['Java'],
          experience: ['4 years'],
          profeciency: ['intermediate']
        })

    });
    this.employeeForm.valueChanges.subscribe(val => {
      console.log(val);
      console.log(this.employeeForm);
    // let name =  this.employeeForm.controls.fullName.value;
    // if(name) {
    //   this.pattern = name.matches("[a-zA-Z ]*");
    // }
     

    })

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
    console.log(this.employeeForm);

  }

  resetData(): void {
    console.log("in reset");
    console.log("employee form " + this.employeeForm.controls.fullName.value)
    this.employeeForm.reset();
  }
}
