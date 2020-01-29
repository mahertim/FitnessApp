import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';

import {
  FormArray,
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

import { Meal } from '../../../shared/models/meal.model';

@Component({
  selector: 'app-meal-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./meal-form.component.scss'],
  templateUrl: './meal-form.component.html',
})
export class MealFormComponent {
  @Output()
  create = new EventEmitter<Meal>();

  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    ingredients: this.fb.array(['']),
  });

  constructor(private fb: FormBuilder) {}

  get required() {
    const nameControl = this.form.get('name');
    if (nameControl) {
      return nameControl.hasError('required') && nameControl.touched;
    } else {
      return false;
    }
  }

  get ingredients() {
    return this.form.get('ingredients') as FormArray;
  }

  addIngredient() {
    this.ingredients.push(new FormControl(''));
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  createMeal() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
  }
}
