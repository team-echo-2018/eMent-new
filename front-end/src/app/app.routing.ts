import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { Error404Component } from './pages/error404/error404.component';
import { ProjectComponent } from './pages/project/project.component';
import { MessagingComponent } from './pages/messaging/messaging.component';
import { ForumComponent } from './pages/forum/forum.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HelpComponent } from './pages/help/help.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { LoadingScreenComponent } from './pages/loading-screen/loading-screen.component';
import { FeaturesComponent } from './pages/features/features.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'messaging', component: MessagingComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'help', component: HelpComponent },
  { path: 'admin-panel', component: AdminPanelComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'loading', component: LoadingScreenComponent },
  { path: '**', component: Error404Component }
];

export const partialComponents = [];
