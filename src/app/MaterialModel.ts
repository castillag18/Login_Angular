import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, 
    MatFormFieldModule, MatSelectModule, MatInputModule, MatBadgeModule],
  exports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, 
    MatFormFieldModule, MatSelectModule, MatInputModule, MatBadgeModule],
})


export class MaterialModel { }