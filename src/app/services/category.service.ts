import { Injectable } from '@angular/core';
import { Category } from '../interface/category'
import { Firestore, collection, collectionData, deleteDoc, doc, updateDoc, setDoc, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

    constructor(private fire: Firestore) { }

    generateId(): string {
        const id = doc(collection(this.fire, 'dummy')).id;
        return id;
    }
    // Category
    CREATE_category(cat: Category) {
        cat.id = this.generateId();
        const categoryRef = collection(this.fire, 'Category');
        return setDoc(doc(categoryRef, cat.id), cat);
    }
    READ_category(): Observable<Category[]> {
        const token = localStorage.getItem('userID'); //get userID
        const categoryRef = collection(this.fire, 'Category');
        const filteredData = query(categoryRef, where('userID','==',token))
        return collectionData(filteredData, { idField: 'id' }) as Observable<Category[]>;
    }
    DELETE_category(id: string) {
        const categoryDoc = doc(this.fire, 'Category', id);
        return deleteDoc(categoryDoc);
    }
    UPDATE_category(cat: Category) {
        const categoryDoc = doc(this.fire, 'Category', cat.id);
        return updateDoc(categoryDoc, { ...cat });
    }
}
