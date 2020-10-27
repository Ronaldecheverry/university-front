import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { CourseService } from './service/course.service';
import { CourseListComponent } from './component/course/course-list/course-list.component';
import { FormsModule } from '@angular/forms';
import { CourseSaveComponent } from './component/course/course-save/course-save.component';
import { CourseEditComponent } from './component/course/course-edit/course-edit.component';
import { CourseDeleteComponent } from './component/course/course-delete/course-delete.component';
import { StudentService } from './service/student.service';
import { StudentListComponent } from './component/student/student-list/student-list.component';
import { StudentSaveComponent } from './component/student/student-save/student-save.component';
import { StudentDeleteComponent } from './component/student/student-delete/student-delete.component';
import { StudentEditComponent } from "./component/student/student-edit/student-edit.component";
import { InstructorListComponent } from './component/instructor/instructor-list/instructor-list.component';
import { InstructorSaveComponent } from './component/instructor/instructor-save/instructor-save.component';
import { InstructorEditComponent } from './component/instructor/instructor-edit/instructor-edit.component';
import { InstructorDeleteComponent } from './component/instructor/instructor-delete/instructor-delete.component';
import { InstructorService } from './service/instructor.service';
import { DepartmentService } from './service/department.service';
import { DepartmentListComponent } from './component/department/department-list/department-list.component';
import { DepartmentEditComponent } from './component/department/department-edit/department-edit.component';
import { DepartmentSaveComponent } from './component/department/department-save/department-save.component';
import { DepartmentDeleteComponent } from './component/department/department-delete/department-delete.component';
@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseSaveComponent,
    CourseEditComponent,
    CourseDeleteComponent,
    StudentListComponent,
    StudentSaveComponent,
    StudentEditComponent,
    StudentDeleteComponent,
    InstructorListComponent,
    InstructorSaveComponent,
    InstructorEditComponent,
    InstructorDeleteComponent,
    DepartmentListComponent,
    DepartmentEditComponent,
    DepartmentSaveComponent,
    DepartmentDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CourseService,
    StudentService,
    InstructorService,
    DepartmentService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
