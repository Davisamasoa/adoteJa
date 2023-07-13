import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AnimalsComponent } from './pages/animals/animals.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cachorros', component: AnimalsComponent },
  { path: 'gatos', component: AnimalsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
