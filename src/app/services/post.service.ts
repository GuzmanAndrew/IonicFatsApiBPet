import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";

export interface Post {
  id: string;
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: "root",
})
export class PostService {
  constructor(private http: HttpClient) {}

  API = `${environment.API}`;

  getPosts() {
    return this.http.get<Post[]>(`${this.API}/users`);
  }

  createPost(name: string, email: string, password: string) {
    return this.http.post<Post[]>(`${this.API}`, {
      name,
      email,
      password
    });
  }

  removePost(id: string) {
    return this.http.delete<Post>(`${this.API}/${id}`);
  }

  getPostById(id: string) {
    return this.http.get<Post>(`${this.API}/users/${id}`);
  }

  updatePost(id: string, post: Post) {
    return this.http.put(`${this.API}/users/${id}`, post);
  }
}
