import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { componentNeedsResolution } from '@angular/core/src/metadata/resource_loading';
import { Observable } from 'rxjs';
import { category } from './models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getCategories(): Observable<category[]> {

    // this.db.list.
    return this.db.list<category>("/Categories").valueChanges();

  }
}
