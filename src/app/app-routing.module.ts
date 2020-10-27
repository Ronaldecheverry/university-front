import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDeleteComponent } from './component/course/course-delete/course-delete.component';
import { CourseEditComponent } from './component/course/course-edit/course-edit.component';
import { CourseListComponent } from './component/course/course-list/course-list.component';
import { CourseSaveComponent } from './component/course/course-save/course-save.component';
import { DepartmentDeleteComponent } from './component/department/department-delete/department-delete.component';
import { DepartmentEditComponent } from './component/department/department-edit/department-edit.component';
import { DepartmentListComponent } from './component/department/department-list/department-list.component';
import { DepartmentSaveComponent } from './component/department/department-save/department-save.component';
import { InstructorDeleteComponent } from './component/instructor/instructor-delete/instructor-delete.component';
import { InstructorEditComponent } from './component/instructor/instructor-edit/instructor-edit.component';
import { InstructorListComponent } from './component/instructor/instructor-list/instructor-list.component';
import { InstructorSaveComponent } from './component/instructor/instructor-save/instructor-save.component';
import { StudentDeleteComponent } from './component/student/student-delete/student-delete.component';
import { StudentEditComponent } from "./component/student/student-edit/student-edit.component";
import { StudentListComponent } from './component/student/student-list/student-list.component';
import { StudentSaveComponent } from './component/student/student-save/student-save.component';

const routes: Routes = [

  { path: 'course-list', component: CourseListComponent },
  { path: 'course-save', component: CourseSaveComponent },
  { path: 'client-edit/:id', component: CourseEditComponent },
  { path: 'client-delete/:id', component: CourseDeleteComponent },
  { path: 'student-list', component: StudentListComponent },
  { path: 'student-save', component: StudentSaveComponent },
  { path: 'student-edit/:id', component: StudentEditComponent },
  { path: 'student-delete/:id', component: StudentDeleteComponent },
  { path: 'instructor-list', component: InstructorListComponent },
  { path: 'instructor-save', component: InstructorSaveComponent },
  { path: 'instructor-edit/:id', component: InstructorEditComponent },
  { path: 'instructor-delete/:id', component: InstructorDeleteComponent },
  { path: 'department-list', component: DepartmentListComponent },
  { path: 'department-save', component: DepartmentSaveComponent },
  { path: 'department-edit/:id', component: DepartmentEditComponent },
  { path: 'department-delete/:id', component: DepartmentDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
