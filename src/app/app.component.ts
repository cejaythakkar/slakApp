import { Component , TemplateRef } from '@angular/core';
import { Project } from './project.model';
import { Member } from './member.model';
import { MultiSelectOptions } from './multi-select-options';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  projectCollection : Array<Project>;
  administrationCollection : Array<Member>;
  projectMembersCollection : Array<Member>;
  projectOptions : MultiSelectOptions;
  constructor()
  {
     this.projectCollection = [new Project('p010','UI TEAM'),
                               new Project('p020','BACKEND TEAM')
     ];

     this.administrationCollection = [new Member('m0001','Jay Thakkar','Jay','Thakkar','p010','assets/images/DSC03779.JPG'),
                               new Member('m0002','Reecha Sharma','Reecha','Sharma','p010','')
     ];

     this.projectMembersCollection = [new Member('m0001','Jay Thakkar','Jay','Thakkar','p010','assets/images/DSC03779.JPG'),
                               new Member('m0002','Reecha Sharma','Reecha','Sharma','p010',''),
                               new Member('m0003','Rachit Sakhidar','Rachit','Sakhidas','p010','assets/images/DSC03779.JPG'),
                               new Member('m0004','Chinmay Gandhi','Chinmay','Gandhi','p010',''),
                               new Member('m0005','Bharat Rathvi','Bharat','Rathvi','p010','assets/images/DSC03779.JPG'),
                               new Member('m0006','Gagan Chapadia','Gagan','Chapadia','p010',''),
                               new Member('m0007','Nirav Patel','Nirav','Patel','p010','assets/images/DSC03779.JPG'),
                               new Member('m0008','Himesh Adheshara','Himesh','Adheshara','p010',''),
                               new Member('m0009','Paresh Tahilliani','Paresh','Tahilliani','p010','assets/images/DSC03779.JPG'),
                               new Member('m0010','pratik parekh','pratik','parekh','p010',''),
                               new Member('m0011','Ragini Patel','Ragini','Patel','p010','assets/images/DSC03779.JPG'),
                               new Member('m0012','Rahulgiri Goswami','Rahulgiri','Goswami','p010',''),
                               new Member('m0013','VasimAhmed Khatri','VasimAhmed','Khatri','p010','assets/images/DSC03779.JPG')
     ];

     this.projectOptions = new MultiSelectOptions(false);
  }
}
