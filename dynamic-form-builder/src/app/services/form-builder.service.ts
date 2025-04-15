import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormField } from '../models/form-field.model';

const STORAGE_KEY = 'dynamic_form_fields';

@Injectable({ providedIn: 'root' })
export class FormBuilderService {
  private fieldsSubject: BehaviorSubject<FormField[]>;

  fields$;

  constructor() {
    const savedFields = localStorage.getItem(STORAGE_KEY);
    const parsedFields: FormField[] = savedFields ? JSON.parse(savedFields) : [];
    this.fieldsSubject = new BehaviorSubject<FormField[]>(parsedFields);
    this.fields$ = this.fieldsSubject.asObservable();
  }

  private saveToStorage(fields: FormField[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fields));
  }

  addField(field: FormField) {
    const current = this.fieldsSubject.value;
    const updated = [...current, field];
    this.fieldsSubject.next(updated);
    this.saveToStorage(updated);
  }

  removeField(index: number) {
    const updated = this.fieldsSubject.value.filter((_, i) => i !== index);
    this.fieldsSubject.next(updated);
    this.saveToStorage(updated);
  }

  clearFields() {
    this.fieldsSubject.next([]);
    localStorage.removeItem(STORAGE_KEY);
  }
}
