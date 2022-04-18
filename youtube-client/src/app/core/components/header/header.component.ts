import { Component, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion/expansion-panel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('panel') panel: MatExpansionPanel;

  constructor(private router: Router) {}

  public panelVisibleHandler() {
    this.panel.toggle();
  }

  toMain() {
    this.router.navigate(['/']);
  }
}
