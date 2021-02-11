import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule
    ]
})
export class MaterialModule { }