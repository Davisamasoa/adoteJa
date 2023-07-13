import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common-components/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './pages/home/home.component';

import { NgIconsModule } from '@ng-icons/core';
import { tablerCat } from '@ng-icons/tabler-icons';
import { FooterComponent } from './common-components/footer/footer.component';
import { AnimalsComponent } from './pages/animals/animals.component';
import { AnimalCardComponent } from './pages/animals/animal-card/animal-card.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, FooterComponent, AnimalsComponent, AnimalCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    NgIconsModule.withIcons({ tablerCat }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
