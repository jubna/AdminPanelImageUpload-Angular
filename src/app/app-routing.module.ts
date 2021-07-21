import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';


import { HomeComponent } from './home/home.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { AllProfilesComponent } from './components/all-profiles/all-profiles.component';

const routes: Routes = [{
  path:'', component:HomeComponent
},
{
  path:'adminPanel', component:AdminPanelComponent,
  children: [{
    path:'CreateProfile',
    component:CreateProfileComponent
  },
  {
    path:'allProfile',
    component:AllProfilesComponent
  }
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
