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
  defaultOption: any;
  id: string;
  label: string;
  subject: string;
  selectedOption: any;
  submitted = false;
  values: [];
  value: any;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SelectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.defaultOption = data.default;
    this.id = data.id;
    this.label = data.label;
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
      selectedOption: ['', Validators.required]
    });
    this.selectedOption = this.defaultOption;
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }
    // display form values on success
    this.dialogRef.close(
      {
        value: this.form.value.selectedOption,
        id: this.id
      }
    );
  }
}
