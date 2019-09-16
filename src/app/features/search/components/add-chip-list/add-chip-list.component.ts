import { Component, Output, EventEmitter, Input } from '@angular/core';

export interface IChipData {
    name: string;
    id: string;
}

@Component({
	selector: 'recept-add-chip-list',
	templateUrl: './add-chip-list.component.html',
	styleUrls: ['./add-chip-list.component.scss']
})
export class AddChipListComponent {
	@Output() chipChange: EventEmitter<any> = new EventEmitter();
    @Input() chipData: IChipData[];
    @Input() chipPlaceholder: string;
    options: IChipData[];
    searchValue: string = '';

    search (value: string) {
        console.log('search value: ', value);
        this.searchValue = value;
        this.options = [
            { name: 'Frukt', id: '0' },
            { name: 'Sallad', id: '1' },
            { name: 'Dricka', id: '2' },
            { name: 'Soda', id: '3' },
            { name: 'Majs', id: '4' }
        ];
    }
    
    removeChip (removedChip: IChipData) {
        this.chipData = this.chipData.filter(chip => chip.id !== removedChip.id);
		this.chipChange.emit(this.chipData);
    }
    
    selectOption (option: IChipData) {
        this.searchValue = '';
        this.chipData = [ ...this.chipData, option ];
		this.chipChange.emit(this.chipData);
    }
}
