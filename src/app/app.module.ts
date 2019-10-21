import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatDividerModule, MatButtonModule, MatDialogModule, MatToolbarModule, MatIconModule, MatCardModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeService } from './shared/home.service';
import { CardComponent } from './shared/components/card/card.component';
import { InfoDialog } from './shared/components/info-dialog/info-dialog.component';
import { KeysPipe } from './shared/pipes/key.pipe';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    InfoDialog,
    KeysPipe,
    DetailComponent
  ],
  entryComponents: [
    CardComponent,
    InfoDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
