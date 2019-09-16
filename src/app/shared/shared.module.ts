
import { NgModule } from '@angular/core';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatSliderModule } from '@angular/material/slider'; 
import { RecipeFlagsComponent } from '../components/recipe-flags/recipe-flags.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { LoadingComponent } from '../components/loading/loading.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ImageSliderComponent } from '../components/image-slider/image-slider.component';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    ToolbarComponent,
    RecipeFlagsComponent,
    LoadingComponent,
    ImageSliderComponent
  ],
  exports: [
    ImageSliderComponent,
    DragDropModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatBottomSheetModule,
    ToolbarComponent,
    RecipeFlagsComponent,
    LoadingComponent,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatDividerModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatSnackBarModule,
    MatChipsModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatBottomSheetModule,
	  MatProgressSpinnerModule,
    MatDividerModule,
    MatSliderModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatSnackBarModule,
    MatChipsModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
