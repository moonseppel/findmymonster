import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient } from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {GeneralMonsterInformation} from "../dataclasses/general-monster-information";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const SERVER_BASE_URL = environment.contentServerUrl;
const CONTENT_API_URL_PART = "/api/documents";

@Injectable()
export class HippoContentService {

  completeServiceUrl = SERVER_BASE_URL + CONTENT_API_URL_PART;

  constructor(private httpClient: HttpClient ) { }

  public getAllMonsters(): Observable<Array<GeneralMonsterInformation>> {
    return this.httpClient.get<Array<GeneralMonsterInformation>>(this.completeServiceUrl);

  }

}
