import { Component } from '@angular/core';
import {
    AuthService,
    SocialUser,
    GoogleLoginProvider
} from 'angular5-social-login';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })

export class LoginComponent {
 
	private user: SocialUser;
  public authorized: boolean = false;
  constructor( private socialAuthService: AuthService ) {}
  
  public socialSignIn(socialPlatform : string) {  

    let socialPlatformProvider;
     if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        
        // Now sign-in with userData        
        if (userData != null) {
               this.authorized = true;
               this.user = userData;        
            }       
      }
    );
  }

  public signOut(){
          this.socialAuthService.signOut();
          this.authorized = false;
      }
  
}