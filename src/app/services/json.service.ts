import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  private url = "https://sls.api.stw-on.de/v1/location/106/menu/2021-05-26?time=noon";

  // Set the http options
   httpOptions = {headers: new HttpHeaders({ "Content-Type": "application/json"})
  };

  /**
   * Service to call all the API
   */

    constructor(private http: HttpClient) {}
  
    /**
     * Function to handle error when the server return an error
     *
     * @param error
     */
    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error("An error occurred:", error.error.message);
      } else {
        // The backend returned an unsuccessful response code. The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` + `body was: ${error.error}`
        );
      }
      // return an observable with a user-facing error message
      return throwError(error);
    }
  
    /**
     * Function to extract the data when the server return some
     *
     * @param res
     */
    private extractData(res: any) {
      let body = res;
      let laneArr = body.map((item: { lane: { name: any; }; }) => item.lane.name);
      console.log(laneArr);
      return laneArr || {};
    }

    /**
     * Function to GET what you want
     *
     * @param url
     */
    public getListOfMeals() {
  
      // Call the http GET
      return this.http.get(this.url, this.httpOptions).pipe(map(this.extractData),
        catchError(this.handleError)
      );
  }



}