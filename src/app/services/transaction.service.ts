import { Injectable } from '@angular/core';
import { Transaction } from '../interface/transaction';
import { Firestore, collection, addDoc, collectionData, deleteDoc, doc, updateDoc, setDoc, Timestamp } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
// import { v4 as uuidv4 } from 'uuid'; // You can use UUID or Firestore's auto-id

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
    transRef:any;

    // constructor(private afs:AngularFirestore) { }
    constructor(private fire: Firestore) { }

    generateId(): string {
        const id = doc(collection(this.fire, 'dummy')).id;
        return id;
    }
    // Expense
    CREATE_transaction(transaction: Transaction, type: string) {
        transaction.id = this.generateId();

        if(type == 'Expense')
            this.transRef = collection(this.fire, 'Expense');
        else 
            this.transRef = collection(this.fire, 'Income');
        return setDoc(doc(this.transRef, transaction.id), transaction);
    }

    READ_transaction(type: string): Observable<Transaction[]> {
        if(type == 'Expense')
            this.transRef = collection(this.fire, 'Expense');
        else 
            this.transRef = collection(this.fire, 'Income');

        return collectionData(this.transRef, { idField: 'id' }).pipe(
            map((transactions: any[]) => transactions.map(item => ({
                ...item,
                date: (item.date instanceof Timestamp)
                    ? item.date.toDate()
                    : new Date(item.date.seconds * 1000)
                }))
            .sort((a, b) => a.date.getTime() - b.date.getTime()) // ✅ ascending by date
            )
        ) as Observable<Transaction[]>;
    };

    DELETE_transaction(id: string, type: string) {
        if(type == 'Expense')
            this.transRef = doc(this.fire, 'Expense', id);
        else if(type == 'Income')
            this.transRef = doc(this.fire, 'Income', id);
        return deleteDoc(this.transRef);
    }
    
    UPDATE_transaction(transaction: Transaction, type: string) {
        if(type == 'Expense')
            this.transRef = doc(this.fire, 'Expense', transaction.id);
        else if(type == 'Income')
            this.transRef = doc(this.fire, 'Income', transaction.id);
        return updateDoc(this.transRef, { ...transaction });
    }

}
