import { Injectable } from '@angular/core';
import { JobViewData } from './jobs-view/jobViewData';

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  location:string;
  skills:string;
  experience:number;
  jobid:string
  switch:boolean;
  jobviewlist:JobViewData[];
  currentDate: Date = new Date();
  days:any=1000*60*60*24;
  constructor(){} 

  jobs(filterjob:any){
    for (let i of filterjob) {
      let secondDate=new Date(this.currentDate);
      let firstDate = new Date(i.created);
      let diffInDays=Math.round(Math.abs((secondDate.getTime() - firstDate.getTime())/(this.days)));
      let noOfWeeks=Math.floor(diffInDays/7);
      let noOfMonths=Math.floor(diffInDays/30);
      i.noOfDays=diffInDays;
      i.noOfWeeks=noOfWeeks;
      i.noOfMonths=noOfMonths;
      i.jobValid=(new Date(i.enddate)>new Date(this.currentDate));
  }

}

postJobUrl='https://naukrichakri.herokuapp.com/byjusjobs/job/listed';
jobSearch='https://naukrichakri.herokuapp.com/byjusjobs/jobs';
jobbylocationurl='https://naukrichakri.herokuapp.com/byjusjobs/jobsin/';
jobbyskillsurl='https://naukrichakri.herokuapp.com/byjusjobs/jobs-for/';
jobbyExpurl='https://naukrichakri.herokuapp.com/byjusjobs/jobs-experience/';
jobbyidurl='https://naukrichakri.herokuapp.com/byjusjobs/jobs/';
jobbylocskill='https://naukrichakri.herokuapp.com/byjusjobs/jobs/';
jobbyexpskill='https://naukrichakri.herokuapp.com/byjusjobs/skill/exp/';
jobsbyexploc='https://naukrichakri.herokuapp.com/byjusjobs/exp/loc/';
jobsbyall='https://naukrichakri.herokuapp.com/byjusjobs/jobs/';
googleLogin='https://naukrichakri.herokuapp.com/auth/login'

}
