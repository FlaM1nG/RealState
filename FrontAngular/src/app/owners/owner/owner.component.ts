import { Component, OnInit } from '@angular/core';
import { OwnerService } from 'src/app/shared/owner.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  constructor(private service : OwnerService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData = {
      OwnerID: 0,
      Name: '',
      Surname: '',
      BirthDate: '',
      Telephone: '',
      Address: '',
      City: '',
      Country: '',
      PostalCode: ''
    } 
  }
  onSubmit(form : NgForm){
    if(form.value.OwnerID == 0)
    this.insertRecord(form);
    else
    this.UpdateRecord(form);
  }
  insertRecord(form : NgForm){
    this.service.postOwner(form.value).subscribe(res => {
      this.toastr.success('Inserted succesfully', 'OWNER REGISTER');
      this.resetForm(form);
      this.service.refreshList();
    });
  }
  UpdateRecord(form : NgForm){
    this.service.putOwner(form.value).subscribe(res => {
      this.toastr.info('Updated succesfully', 'OWNER UPDATED');
      this.resetForm(form);
      this.service.refreshList();
  });
}
}
