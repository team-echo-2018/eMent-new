import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*modules*/
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';

/*components*/
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoSpanComponent } from './components/logo-span/logo-span.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatComponent } from './components/chat/chat.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { ProjectComponent } from './pages/project/project.component';
import { MessagingComponent } from './pages/messaging/messaging.component';
import { ForumComponent } from './pages/forum/forum.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HelpComponent } from './pages/help/help.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';

/*routes*/
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';

/*services*/
import { DatePipe } from '@angular/common';
import { HttpBackendRequestService } from './services/http-backend-request.service';
import { AuthenticationService } from './services/authentication.service';
import { ProDescComponent } from './components/pro-desc/pro-desc.component';
import { NotificationComponent } from './components/notification/notification.component';
import { environment } from 'src/environments/environment';
import { WorkingProjComponent } from './components/working-proj/working-proj.component';
import { OtherProjComponent } from './components/other-proj/other-proj.component';
import { LoadingScreenComponent } from './pages/loading-screen/loading-screen.component';
import { FeaturesComponent } from './pages/features/features.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    Error404Component,
    HomeComponent,
    HeaderComponent,
    LogoSpanComponent,
    NavBarComponent,
    NavItemComponent,
    FooterComponent,
    ProjectComponent,
    MessagingComponent,
    ForumComponent,
    AboutUsComponent,
    HelpComponent,
    ProfileComponent,
    SignUpComponent,
    AdminPanelComponent,
    ChatComponent,
    InboxComponent,
    ProDescComponent,
    NotificationComponent,
    WorkingProjComponent,
    OtherProjComponent,
    LoadingScreenComponent,
    FeaturesComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseconfig),
    AngularFirestoreModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFontAwesomeModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe, HttpBackendRequestService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
