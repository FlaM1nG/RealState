import { Component, OnInit } from '@angular/core';
import { OwnerService } from 'src/app/shared/owner.service';
import { Owner } from 'src/app/shared/owner.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'


@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

  constructor(private service : OwnerService,
    private toastr: ToastrService, private router: Router) { }
    pageActual: number = 1;
  ngOnInit() {
    this.service.refreshList();
  }

  onEdit(owner : Owner){
    this.service.formData = Object.assign({},owner);
  }
  onDelete(id : number){
    if(confirm('Are you sure to delete this record?')){
      this.service.deleteOwner(id).subscribe(res=>{
      this.service.refreshList();
      this.toastr.warning('Deleted succesfully', 'OWNER DELETED');
    })
    }
  }
  goToPage(pageName: string, id: number):void{
    this.router.navigate([`${pageName}`, id]);
}

}
