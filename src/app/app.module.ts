import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StockTableComponent } from './stock-table/stock-table.component';
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule, MatCheckboxModule,
  MatButtonModule, MatListModule, MatDialogModule, MatFormFieldModule, MatInputModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { StocksTableComponent } from './stocks-table/stocks-table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'link1-report', component: StocksTableComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StockTableComponent,
    NavigationBarComponent,
    StocksTableComponent,
    PageNotFoundComponent,
    SettingsDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    LayoutModule,
    MatListModule,
    MatDialogModule,
    MatCheckboxModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  entryComponents: [
    SettingsDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  Title = 'Stocker';

}
