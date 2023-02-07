import { Injectable } from '@angular/core';
import { IComic } from 'src/app/interfaces/icomic';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  comic: IComic = {
    title: '',
    cover: '',
    company: '',
    author: ''
  }

  id: number = 0;

  constructor(private http: HttpClient) { }
     
  //CRUD METHODS
  getComics(){
    return this.http.get('http://localhost:3000/comics');
  }

  getComicById(id: number){
    return this.http.get(`http://localhost:3000/comics/${id}`);
  }

  postComic(comic: IComic){
    return this.http.post('http://localhost:3000/comics',comic);
  }

  putComic(comic: IComic){
    return this.http.put(`http://localhost:3000/comics/${comic.id}`, comic);
  }

  deleteComic(id: number){
    return this.http.delete(`http://localhost:3000/comics/${id}`);
  }

  setComic(comic:IComic, id: number){
    this.comic = comic;
    this.id = id;
  }


}
