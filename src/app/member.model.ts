import { common } from './multi-select-display-interface';
export class Member implements common{
	public displayName : string;
	public displayThumb : string;
	constructor(public memberId:string,
				public memberName:string,
				public firstName:string,
				public lastName:string,
				public projectId:string,
				public thumbUrl:string,
				public memberAbbriviation:string = ''){
		this.memberId = memberId;
		this.memberName = memberName;
		this.firstName = firstName;
		this.lastName = lastName;
		this.projectId = projectId;
		this.thumbUrl = thumbUrl;
		this.memberAbbriviation = this.getAbbriviatedName();
		this.displayName = this.memberName;
		this.displayThumb = this.displayThumb;
	}
	getAbbriviatedName() : string {
		return `${this.firstName.charAt(0)}${this.lastName.charAt(0)}`;
	}
}