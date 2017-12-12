import { common } from './multi-select-display-interface';
export class Project implements common{
    public displayName : string;
    constructor(public projectId:string,public projectName:string){
        this.projectId = projectId;
        this.projectName = projectName;
        this.displayName = projectName;   
    }
}