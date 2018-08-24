import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog, MatDatepickerModule } from '@angular/material';
import { SettingsDialogComponent, SettingsData } from '../settings-dialog/settings-dialog.component';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {

  settingsData: SettingsData = { darkMode: false, hideSideBar: false };

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(SettingsDialogComponent, {
      width: '250px',
      data: this.settingsData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
