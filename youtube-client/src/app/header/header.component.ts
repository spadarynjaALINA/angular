import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion/expansion-panel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('panel') panel: MatExpansionPanel;

  @Output() searchValueSubmit = new EventEmitter<string>();

  @Output() filterSubmit = new EventEmitter<string>();

  @Output() sortBySubmit = new EventEmitter<string>();

  @Output() isClickSubmit = new EventEmitter<undefined | boolean>();

  public panelVisibleHandler() {
    this.panel.toggle();
  }

  inputChange(value: string): void {
    this.searchValueSubmit.emit(value);
  }

  inputFilterChange(value: string): void {
    this.filterSubmit.emit(value);
  }

  sortByToggle(value: string): void {
    this.sortBySubmit.emit(value);
  }
}
