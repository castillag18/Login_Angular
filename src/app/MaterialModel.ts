import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, 
    MatFormFieldModule, MatSelectModule, MatInputModule, MatBadgeModule, MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, 
    MatFormFieldModule, MatSelectModule, MatInputModule, MatBadgeModule, MatCardModule],
})


export class MaterialModel { }