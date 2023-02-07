import { Component, OnInit } from '@angular/core';
import { IComic } from 'src/app/interfaces/icomic';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  comicsArray!: IComic[];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getComics().subscribe((data:any) => {
      this.comicsArray = data;
      console.log(data);
      
    })
  }
}
