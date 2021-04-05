import { Component, OnInit } from '@angular/core';
import { Member } from '../_models/member';
import { Pagination } from '../_models/pagination';
import { MembersService } from '../_services/members.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  members: Partial<Member[]>;
  predicate: string;
  pageNumber = 1;
  PageSize = 5;
  pagination: Pagination;

  constructor(private membersService: MembersService) { }

  ngOnInit(): void {
    this.predicate = 'liked';
    this.loadLikes();
  }

  loadLikes(){
    this.membersService.getLikes(this.predicate, this.pageNumber, this.PageSize).subscribe(response => {
      this.members = response.result;
      this.pagination = response.pagination;
    })
  }


  pageChanged(event: any){
    this.pageNumber = event.page;
    this.loadLikes();
  } 
}
