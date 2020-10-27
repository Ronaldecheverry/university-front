import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from '../domain/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public url: string;

  constructor(public httpClient: HttpClient) {
    this.url = environment.apiUrl + 'api/students/';
  }

  public getAll(): Observable<any> {
    return this.httpClient.get(this.url);

  }
  public getById(id: number): Observable<any> {
    return this.httpClient.get(this.url + id);

  }
  public save(student: Student): Observable<any> {

    return this.httpClient.post(this.url, student);
  }

  public edit(student: Student): Observable<any> {
    return this.httpClient.put(this.url + '/' + student.Id, student);

  }

  public delete(id: number) {
    return this.httpClient.delete(this.url + id);

  }
}
