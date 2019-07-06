import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DropzoneConfigInterface, DropzoneComponent, DropzoneDirective } from 'ngx-dropzone-wrapper';
import { IBlog } from 'src/app/_interfaces/IBlog';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  public config: DropzoneConfigInterface = {
    url: `${environment.apiUrl}api/admin/blog`,
     clickable: true,
     uploadMultiple: false,
     autoProcessQueue: false,
     parallelUploads: 100,
     createImageThumbnails: true,
     autoReset: 2000,
     errorReset: null,
     cancelReset: null
   };
   @ViewChild(DropzoneComponent) drpzone?: DropzoneComponent;
  @ViewChild(DropzoneDirective) directiveRef?: DropzoneDirective;

  blogModel: IBlog = {
    blogTitle: '',
    blogDescription: '',
    blogImage: null
  };
  constructor() { }

  ngOnInit() {
  }


  addBlog() {
    this.drpzone.directiveRef.dropzone().processQueue();
  }

  onSending(_filesEvent): any {
    if (_filesEvent) {
       const formData = _filesEvent[2];
       formData.append('blogTitle', this.blogModel.blogTitle);
       formData.append('blogDescription', this.blogModel.blogDescription);
    }
  }

  public onUploadError(args: any): void {
    console.log('error:', args);
  }


}
