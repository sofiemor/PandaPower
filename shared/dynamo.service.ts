import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamoService {
  private apiUrl = 'https://yqes509iei.execute-api.us-east-1.amazonaws.com';

  constructor(private http: HttpClient) { }

  public createCase(caseData: any) {
    return this.http.put(`${this.apiUrl}/items`, caseData);
  }

  public getCases(){
    return this.http.get(`${this.apiUrl}/items`);
  }

  public getCase(id: string){
    return this.http.get(`${this.apiUrl}/items/${id}`);
  }
  

  public deleteCase(id: string){
    return this.http.delete(`${this.apiUrl}/items/${id}`);
  }
}
