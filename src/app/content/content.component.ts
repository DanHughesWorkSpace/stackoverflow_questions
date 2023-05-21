import { Component, inject } from '@angular/core';
import { StackoverflowApiService } from '../stackoverflow-api.service';
import { Item } from '../stackoverflow-api';
import { of } from 'rxjs'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  stackoverflowAPI = inject(StackoverflowApiService);
  topTenQuestions : Item[] = [];

  ngOnInit() {
    this.stackoverflowAPI.getTopTenQuestions().subscribe((res)=> {
      this.topTenQuestions = res.items;
    })
  }

}
