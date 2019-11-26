import { Component, OnInit, Inject }        from '@angular/core';
import { FormBuilder,FormGroup} from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA}     from '@angular/material';

@Component({
  selector: 'select-dialog',
  templateUrl: './select-dialog.component.html',
  styleUrls: ['./select-dialog.component.scss']
})

export class SelectDialogComponent implements OnInit {

  form: FormGroup;
  subject: string;
  values: [];
  value: any;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SelectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.subject = data.subject;
    this.values = data.values;
    this.value = ''

    this.form = fb.group({
      // value: [value],
    });
  }

  save() {
      this.dialogRef.close(this.form.value);
  }
  close() {
      this.dialogRef.close();
  }

  ngOnInit() {
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