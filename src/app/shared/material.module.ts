import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatNativeDateModule,
    MatOptionModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    ErrorStateMatcher, ShowOnDirtyErrorStateMatcher
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatNativeDateModule,
        MatOptionModule,
        MatCardModule,
        MatListModule,
        MatToolbarModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatNativeDateModule,
        MatOptionModule,
        MatCardModule,
        MatListModule,
        MatToolbarModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class MaterialModule { }
