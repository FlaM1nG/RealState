import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/shared/property.service';
import { Property } from 'src/app/shared/property..model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor(private service : PropertyService,
    private toastr: ToastrService, private router: Router) { }
    pageActual: number = 1;
  ngOnInit() {
    this.service.refreshList();
  }
  onEdit(property : Property){
    this.service.formData = Object.assign({},property);
  }
  onDelete(id : number){
    if(confirm('Are you sure to delete this record?')){
      this.service.deleteProperty(id).subscribe(res=>{
      this.service.refreshList();
      this.toastr.warning('Deleted succesfully', 'PROPERTY DELETED');
    })
    }
  }
}


