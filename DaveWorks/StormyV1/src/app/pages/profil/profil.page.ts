import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  profile = null;
  constructor(private router: Router,
		private authService: AuthentificationService,
    private userService: UserService,
    ) {

      this.userService.getUserProfile().subscribe((data) => {
        this.profile = data;
      });
     }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['/tabs1'])
  }
  

  async logout(){
    await this.authService.logout();
    this.router.navigateByUrl('/',{ replaceUrl: true });
    
  }

}
