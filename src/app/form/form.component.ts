import { Component, OnInit } from '@angular/core';
import { FormModel } from '../models/form.model'
import { FormGroup, FormBuilder, Validator, Validators} from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  student: FormModel = new FormModel();
  studentForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.studentForm=this.formBuilder.group({
      'name': [this.student.name, [
        Validators.required
      ]],
      'student_emailID': [this.student.student_emailID, [
        Validators.required
      ]],
      'USN': [this.student.USN
      ],
      'repoID': [this.student.repoID, [
        Validators.required
      ]]
    });
  }

  onStudentSubmit(){
    alert('Name: '+this.student.name+'\n'+'Email ID: '+this.student.student_emailID+'\n'+'Repository ID: '+this.student.repoID);
  }

}
