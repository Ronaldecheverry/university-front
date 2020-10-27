import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Department } from 'src/app/domain/department';
import { Instructor } from 'src/app/domain/instructor';
import { DepartmentService } from 'src/app/service/department.service';
import { InstructorService } from 'src/app/service/instructor.service';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit, OnDestroy {

  public id: number;
  public department: Department;
  public showMsg: boolean = false;
  public msg: string;
  public type: string;

  public instructors: Instructor[];
  public subInstructors: Subscription;

  constructor(public departmentService: DepartmentService, public instructorService: InstructorService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnDestroy(): void {
    this.subInstructors.unsubscribe();
  }

  ngOnInit(): void {

    this.getById();
    this.getAllInstructors();
  }

  public getById() {

    let param = this.activatedRoute.params['_value'];
    this.id = param.id;

    this.departmentService.getById(this.id).subscribe(data => {

      this.department = data;
    });
  }

  public getAllInstructors() {
    this.subInstructors = this.instructorService.getAll().subscribe(data => {
      this.instructors = data;
    });


  }
  public edit() {

    console.log(this.department);

    this.departmentService.edit(this.department).subscribe(data => {
      this.router.navigate(['/department-list']);

    }, error => {
      console.error(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';



    });
  }

}
