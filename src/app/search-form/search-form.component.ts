import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { User } from '../user';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  username: any;
  searchService!:SearchService;

  submitUsername(){
    this.searchService.getUserData(this.username)
  }
  
  constructor(searchService:SearchService) { 
    this.searchService = searchService;
  }

  ngOnInit(): void {
  }

}
