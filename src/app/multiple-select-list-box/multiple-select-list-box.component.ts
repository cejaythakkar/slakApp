import { Component, OnInit , Input , TemplateRef} from '@angular/core';
import { Member } from '../member.model';
import { Project } from '../project.model';
import { MultiSelectOptions } from '../multi-select-options';
@Component({
  selector: 'app-multiple-select-list-box',
  templateUrl: './multiple-select-list-box.component.html',
  styleUrls: ['./multiple-select-list-box.component.css']
})
export class MultipleSelectListBoxComponent implements OnInit {
  @Input('projectCollection') projectCollection : Array<Project>;
  @Input('administratorCollection') administratorCollection : Array<Member>;
  @Input('projectMembersCollection') projectMembersCollection : Array<Member>;
  @Input('customProjectListTemplate') customProjectListTemplate : TemplateRef<any>;
  @Input('customMemberTemplate') customMemberTemplate : TemplateRef<any>;
  @Input('options') options : MultiSelectOptions;

  public selectedProject = '';

  public projectSearchTextBoxValue : string;

  public collection : Array<Project>;
  
  constructor() {
  }

  public setSelectedProject(selectedProject){
    this.selectedProject = selectedProject;
  }

  public removeSelection(){
    this.selectedProject = '';
  }

  public getsearchedProjectList(){
    if(this.projectSearchTextBoxValue === ''){
     
    }else{
    
    }
  }
  ngOnInit() {
    this.collection = [this.projectCollection[0]];
  }
}
