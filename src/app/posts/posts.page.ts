import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { PostService, Post } from "../services/post.service";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.page.html",
  styleUrls: ["./posts.page.scss"],
})
export class PostsPage implements OnInit {
  posts: Post[] = [];

  API = "http://167.172.170.87";

  constructor(
    private postService: PostService,
    private alertController: AlertController
  ) {}

  loadPosts() {
    this.postService.getPosts().subscribe(
      (res) => {
        this.posts = res;
      },
      (err) => console.log(err)
    );
  }

  ngOnInit() {
    this.loadPosts();
  }

  ionViewWillEnter() {
    this.loadPosts();
  }

  async removePost(id: string) {
    const alert = await this.alertController.create({
      header: "¡Alerta!",
      subHeader: "Borrar Tarjeta",
      message: "¿Esta seguro de eliminar la tarjeta?.",
      buttons: [
        "No",
        {
          text: "Si",
          handler: () => {
            this.postService.removePost(id).subscribe(
              (res) => {
                console.log(res);
                this.loadPosts();
              },
              (err) => console.log(err)
            );
          },
        },
      ],
    });

    await alert.present();
  }
}
