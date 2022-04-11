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

  @Output() panelValueSubmit = new EventEmitter<string>();

  @Output() sortBySubmit = new EventEmitter<string>();

  @Output() isClickSubmit = new EventEmitter<undefined | boolean>();

  public panelHidden() {
    this.panel.toggle();
  }

  inputChange(value: string) {
    this.searchValueSubmit.emit(value);
  }

  inputPanelChange(value: string) {
    this.panelValueSubmit.emit(value);
  }

  toggleSort(value: string) {
    this.sortBySubmit.emit(value);
  }
}
