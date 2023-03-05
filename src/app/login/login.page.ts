import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  post: any = {
    user : "",
    password : ""
  };

  constructor(private router: Router,
    private alertController: AlertController) { }

  ngOnInit() {
  }

  async login() {
    if (this.post.user == "guest" && this.post.password == "1234") {
      this.router.navigate(["/posts"]);
    } else {
      const alert = await this.alertController.create({
        header: "¡Error!",
        message: "Las credenciales son incorrectas",
        buttons: [
          "Cerrar"
        ],
      });
      await alert.present();
    }
  }

}
