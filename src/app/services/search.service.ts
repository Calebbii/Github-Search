import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repository } from '../repository';
import { User } from '../user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  users!: User;
  repositories!: Repository;
  repoData:any = [];
  newUserData:any = [];


  constructor(private http: HttpClient) {
    this.users = new User('', '', '', '', 0, 0, '', '',new Date)
    this.repositories = new Repository('', '','', '', new Date)
  }

  getUserData(username:string){
    interface ApiResponse {
      bio: string,
      public_repos: number,
      login: string,
      avatar_url: string,
      clone_url:string,
      dateCreated:Date

    }
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/" + username).toPromise().then(response => {

        this.users.bio = response.bio;
        this.users.login = response.login;
        this.users.repoNumber = response.public_repos;
        this.users.avatar_url = response.avatar_url;
        this.users.dateCreated = response.dateCreated;
      

        resolve()

      }, error => {
        reject(error)
      })
      this.http.get<any>("https://api.github.com/users/" + username + "/repos").toPromise().then(response =>{
        for(let i=0;i<response.length;i++){
          this.newUserData = new Repository(response[i].name, response[i].language, response[i].clone_url, response[i].description, response[i].updated_at)
          this.repoData.push(this.newUserData)
        }
        resolve()
      }, error => {
        reject(error)
      })

    })
    return promise;

  }

}
