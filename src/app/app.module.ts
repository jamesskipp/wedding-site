import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaneComponent } from './components/pane/pane.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { DropdownMenuComponent } from './components/header/dropdown-menu/dropdown-menu.component';
import { AppRoutingModule } from './app-router.module';
import { WeddingTitleComponent } from './components/wedding-title/wedding-title.component';
import { IntroComponent } from './pages/intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    PaneComponent,
    FooterComponent,
    HeaderComponent,
    DropdownMenuComponent,
    WeddingTitleComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
