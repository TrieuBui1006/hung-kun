import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getApiData() {
    // Trong headers la access token
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer VE--8Son2Nw7dKMEAo4Vu2xiSwc'
    );

    // trong params la cac tieu chi de chon loc companies
    const params = new HttpParams()
      .set('departments', '75')
      .set('rome_codes', 'M1805');

    const options = { params: params, headers: headers };

    return this.http.get(
      'https://api.emploi-store.fr/partenaire/labonneboite/v1/company/',
      options
    );
  }
}
