import { SearchService } from '../services/search.service';
import { User } from '../user';
import { Repository } from '../repository';
import { Component, OnInit } from '@angular/core';
import { DateCreatedPipe } from '../date-created.pipe';

@Component({
  selector: 'app-exhibit',
  templateUrl: './exhibit.component.html',
  styleUrls: ['./exhibit.component.css']
})
export class ExhibitComponent implements OnInit {
  Users!: User;
  Repositories!:Repository;
  searchService:SearchService;
  repoDetails : any = []


  constructor(searchService:SearchService) {
    this.searchService = searchService;
   }

  ngOnInit(): void {
    this.Users = this.searchService.users;
    this.repoDetails = this.searchService.repoData;
  }

}
