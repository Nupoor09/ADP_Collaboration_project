import { HttpClient } from '@angular/common/http';
import { CommentData } from '../models/comment-data.model';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  baseUrl = "http://localhost:3001/products";

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: (isError) ? ['msg-error'] : ['msg-success']
    });
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('An error has occurred!', true);
    return EMPTY;
  }

  read(): Observable<CommentData[]> {
    return this.http.get<CommentData[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );;
  }

  readById(id: string): Observable<CommentData> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<CommentData>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );;
  }

  create(product: CommentData): Observable<CommentData> {
    return this.http.post<CommentData>(this.baseUrl, product).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );;
  }

  delete(id: string): Observable<CommentData> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<CommentData>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );;
  }
}
