import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MainService } from 'src/app/_services/main.service';
import { IBlog } from 'src/app/_interfaces/IBlog';
import { DomSanitizer } from '@angular/platform-browser';
import Plyr from 'plyr';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit, AfterViewInit {

  blogs: IBlog[] = [];
  constructor(private mainService: MainService,private sanitizer: DomSanitizer) { }
  player: any;
  ngOnInit() {
    this.getBlogs();
    const player = new Plyr('#player');
    this.player = player;
  }

  ngAfterViewInit() {

}

  getBlogs() {
    this.mainService.getBlogs().subscribe( res => {
      this.blogs = res.data;
      console.log(res);
    }, err => {
      console.log(err);
    });
  }






}
