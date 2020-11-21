import { Component, OnInit ,TemplateRef,ViewChild } from '@angular/core';
import {EnrolleeService} from './enrollee.service';
import {Enrollee} from './enrollee.model';
import { FormGroup, FormControl } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
//import * as $ from 'jquery';
declare var $ :any;
@Component({
  selector: 'app-enrollee',
  templateUrl: './enrollee.component.html',
  styleUrls: ['./enrollee.component.css']
})
export class EnrolleeComponent implements OnInit {
  enrolleeList:any;
  editForm:FormGroup;
  profileUpdated:boolean=false;
  modalRef: BsModalRef;
  @ViewChild('errorTemplate')  errorTemplate: TemplateRef<any>;

  constructor(private enrolleeService:EnrolleeService,
     private modalService: BsModalService) { }
     openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }
  ngOnInit(): void {
    this.getEnrolleeList();
  }
  getEnrolleeList(){
    this.enrolleeService.getEnrolleeList().subscribe((result)=>{
      this.enrolleeList=result;
     },(error)=>{
      console.log(error);
      this.modalRef = this.modalService.show(this.errorTemplate);
    })
  }
  
  editEnrollee(eid){
    this.editForm = new FormGroup({
      name: new FormControl(''),
      active: new FormControl(''),
      id: new FormControl(eid),
    });
    let enrolleeExist=this.enrolleeList.findIndex((element)=>{
        return element.id==eid;
    });
    if(enrolleeExist>-1){
      this.editForm.controls['name'].setValue(this.enrolleeList[enrolleeExist].name);
      this.editForm.controls['active'].setValue(this.enrolleeList[enrolleeExist].active);
      $('#editModal').modal('show');
    }
  }
  UpdateData(){
    console.log(this.editForm.value);
    let enrolleeExist=this.enrolleeList.findIndex((element)=>{
      return element.id==this.editForm.value.id;
    });
    if(enrolleeExist>-1){
      this.enrolleeList[enrolleeExist].name=this.editForm.value.name;
      this.enrolleeList[enrolleeExist].active=this.editForm.value.active;
      this.profileUpdated=true;
      setTimeout(()=>{
        $('#editModal').modal('hide');
        this.profileUpdated=false;
      },3000);
    }
  }

}
