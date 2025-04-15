import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormBuilderService } from '../../services/form-builder.service';
import { FormField } from '../../models/form-field.model';

import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent  {



  fieldForm!: FormGroup;
  dynamicForm!: FormGroup;
  fields: FormField[] = [];
 
  submittedData: any = {};
  

  @ViewChild('successDialog') successDialog!: TemplateRef<any>;

  constructor(
    private fb: FormBuilder,
    private formBuilderService: FormBuilderService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initFieldForm();

    this.formBuilderService.fields$.subscribe(fields => {
      this.fields = fields;
      this.buildDynamicForm();
    });
  }

  initFieldForm() {
    this.fieldForm = this.fb.group({
      type: ['', Validators.required],
      label: ['', Validators.required],
      placeholder: [''],
      required: [false],
      options: ['']
    });
  }





  addField() {
    const formValue = this.fieldForm.value;
    const field: FormField = {
      type: formValue.type,
      label: formValue.label,
      placeholder: formValue.placeholder,
      required: formValue.required,
      name: formValue.label.toLowerCase().replace(/\s+/g, '_'),
      options: (formValue.type === 'dropdown' || formValue.type === 'radio') && formValue.options
        ? formValue.options.split(',').map((opt: string) => ({
            label: opt.trim(),
            value: opt.trim().toLowerCase().replace(/\s+/g, '_')
          }))
        : undefined
    };
    this.formBuilderService.addField(field);
    this.fieldForm.reset({ type: 'text', required: false });
  }

  buildDynamicForm() {
    const group: any = {};
    this.fields.forEach(field => {
      group[field.name] = field.required ? [null, Validators.required] : [null];
    });
    this.dynamicForm = this.fb.group(group);
  }



// generated form post call
  submit() {
    if (this.dynamicForm.valid) {
      const formData = this.dynamicForm.value;
      console.log('Form Data:', formData);
  
      this.submittedData = formData;
      console.log("formdata",this.submittedData)
  
      this.dialog.open(this.successDialog);    
  
      this.dynamicForm.reset();
  
  
    } else {
      console.warn('Form is invalid');
    }
  }
  

  clearAll() {       //When I click the 'Clear All' button, all dynamically generated form fields should be  cleared.
    this.formBuilderService.clearFields();      
  }

  removeField(index: number) {      //When I click 'Remove Field(delete icon)', the selected/dynamic form field should be deleted from the form
    this.formBuilderService.removeField(index);
  }



}