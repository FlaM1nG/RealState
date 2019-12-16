import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/shared/property.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})

export class PropertyComponent implements OnInit {

  constructor(private service : PropertyService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  
  resetForm(form? : NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData = {
      PropertyID: 0,
      Address: '',
      City: '',
      Country: '',
      PostalCode: '',
      Description: ''
    } 
  }
  onSubmit(form : NgForm){
    if(form.value.OwnerID == 0)
    this.insertRecord(form);
    else
    this.UpdateRecord(form);
  }
  insertRecord(form : NgForm){
    this.service.postProperty(form.value).subscribe(res => {
      this.toastr.success('Inserted succesfully', 'PROP REGISTER');
      this.resetForm(form);
      this.service.refreshList();
    });
  }
  UpdateRecord(form : NgForm){
    this.service.putProperty(form.value).subscribe(res => {
      this.toastr.info('Updated succesfully', 'PROP UPDATED');
      this.resetForm(form);
      this.service.refreshList();
  });
}
}


 
  

