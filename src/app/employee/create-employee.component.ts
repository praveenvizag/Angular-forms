import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  pattern: Boolean = true;
  fullNameLength: number = 0;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      fullName: ['Praveen', [Validators.required, Validators.minLength(2), Validators.maxLength(15), Validators.pattern("[a-zA-Z ]*")
      ]],
      email: ['praveen.konchada@gmail.com'],
      skills: this.fb.group({
        skillName: ['Java'],
        experience: ['4 years'],
        profeciency: ['intermediate']
      })

    });

    this.employeeForm.get('fullName').valueChanges.subscribe(val => {
      console.log(val);
      console.log(this.employeeForm);
      this.fullNameLength = val.length;
      // let name =  this.employeeForm.controls.fullName.value;
      // if(name) {
      //   this.pattern = name.matches("[a-zA-Z ]*");
      // }


    })

  }

  logFormKeyValue(form: FormGroup) :void{
    
    Object.keys(form.controls).forEach((key:string)=>{
      const abstractControl = form.get(key);
      if(abstractControl instanceof FormGroup) {
        this.logFormKeyValue(abstractControl);
        abstractControl.disable();
      } else {
        console.log(" key :" + key + " value " + abstractControl.value)
      }

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
    this.logFormKeyValue(this.employeeForm);

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
