import { catchError, map } from 'rxjs/operators';
import { Product } from './product-model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient} from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,                /* posição do snackBar e duração */
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success'],  /* atributo que chama a class msg-success para mudança do snackBar  */
    })
  }

  create(product: Product): Observable<Product> {  /* essa é a primeira que estamos interagindo com o backend */
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
     ); /* ele vai return Product aqui vamos inserir um produto e receber de volta o mesmo produto */
  }

 

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
     );
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
     );
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
     );
  }

  delete(id?: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
     );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um Erro!", true);
    return EMPTY;
  }

}