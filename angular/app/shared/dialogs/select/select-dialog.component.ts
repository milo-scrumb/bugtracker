import { Component, OnInit, Inject }        from '@angular/core';
import { FormBuilder,FormGroup, Validators} from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA}     from '@angular/material';

@Component({
  selector: 'select-dialog',
  templateUrl: './select-dialog.component.html',
  styleUrls: ['./select-dialog.component.scss']
})

export class SelectDialogComponent implements OnInit {

  form: FormGroup;
  subject: string;
  submitted = false;
  values: [];
  value: any;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SelectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.subject = data.subject;
    this.values = data.values;
  }

  save() {
      this.dialogRef.close(this.form.value);
  }
  close() {
      this.dialogRef.close();
  }

  ngOnInit() {

    this.form = this.fb.group({
      value: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    console.log('submit!!!')
    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }
    // display form values on success
    this.dialogRef.close(this.form.value);
  }
}


// export class CourseDialogComponent implements OnInit {

//     form: FormGroup;
//     description:string;

//     constructor(
//         private fb: FormBuilder,
//         private dialogRef: MatDialogRef<CourseDialogComponent>,
//         @Inject(MAT_DIALOG_DATA) data) {

//         this.description = data.description;
//     }

//     ngOnInit() {
//         this.form = fb.group({
//             description: [description, []],
//             ...
//         });
//     }

//     save() {
//         this.dialogRef.close(this.form.value);
//     }

//     close() {
//         this.dialogRef.close();
//     }
// }