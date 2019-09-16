import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { SearchParamsComponent } from './components/search-params/search-params.component';
import { AddChipListComponent } from './components/add-chip-list/add-chip-list.component';

@NgModule({
    declarations: [
        SearchComponent,
        SearchParamsComponent,
        AddChipListComponent
    ],
    imports: [
        SharedModule,
        BrowserAnimationsModule,
        CommonModule
    ],
    exports: [
        SearchComponent
    ],
    providers: []
    })
export class SearchModule { }
