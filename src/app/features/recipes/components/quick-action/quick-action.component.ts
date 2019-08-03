import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'recept-quick-action',
  templateUrl: './quick-action.component.html',
  styleUrls: ['./quick-action.component.scss']
})
export class QuickActionComponent implements OnInit {
  @Output() toggleView = new EventEmitter<string>();
  @Input() currentView: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openCreateDialog () {
    this.router.navigateByUrl('/recipe?edit=false');
    // this.dialog.open(EditRecipeComponent, {
    //   data: { name: 'austin' },
    //   width: '100vw',
    //   height: '100vh'
    // });
  }

  onToggleView (listOrGrid: string = 'list') {
    this.currentView = this.currentView === listOrGrid ? 'grid' : listOrGrid;
    this.toggleView.emit(this.currentView);
  }

}
