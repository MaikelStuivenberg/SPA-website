import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/notfound/notfound.component';
import { HomeComponent } from './pages/home/home.component';
import { MajorsComponent } from './pages/majors/majors.component';
import { MinorsComponent } from './pages/minors/minors.component';
import { SPAComponent } from './pages/SPA/spa.component';
import { AanmeldenComponent } from './pages/aanmelden/aanmelden.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "majors", component: MajorsComponent },
  { path: "minors", component: MinorsComponent },
  { path: "aanmelden", component: AanmeldenComponent },
  { path: "spa", component: SPAComponent },
  { path: "contact", component: ContactComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
