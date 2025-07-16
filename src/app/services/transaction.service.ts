import { Injectable } from '@angular/core';
import { Transaction } from '../interface/transaction';
import { Firestore, collection, addDoc, collectionData, deleteDoc, doc, updateDoc, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
// import { v4 as uuidv4 } from 'uuid'; // You can use UUID or Firestore's auto-id

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

    // constructor(private afs:AngularFirestore) { }
    constructor(private fire: Firestore) { }

    generateId(): string {
        const id = doc(collection(this.fire, 'dummy')).id;
        return id;
    }
    // Expense
    CREATE_expense(expense: Transaction) {
        expense.id = this.generateId();
        const expenseRef = collection(this.fire, 'Expense');
        return setDoc(doc(expenseRef, expense.id), expense);
    }
    READ_expense(): Observable<Transaction[]> {
        const expenseRef = collection(this.fire, 'Expense');
        return collectionData(expenseRef, { idField: 'id' }) as Observable<Transaction[]>;
    }
    DELETE_expense(id: string) {
        const expenseDoc = doc(this.fire, 'Expense', id);
        return deleteDoc(expenseDoc);
    }
    UPDATE_expense(expense: Transaction) {
        const expenseDoc = doc(this.fire, 'Expense', expense.id);
        return updateDoc(expenseDoc, { ...expense });
    }

    // Income
    CREATE_income(income: Transaction) {
        income.id = this.generateId();
        const incomeRef = collection(this.fire, 'Income');
        return setDoc(doc(incomeRef, income.id), income);
    }
    READ_income(): Observable<Transaction[]> {
        const incomeRef = collection(this.fire, 'Income');
        return collectionData(incomeRef, { idField: 'id' }) as Observable<Transaction[]>;
    }
    DELETE_income(id: string) {
        const incomeDoc = doc(this.fire, 'Income', id);
        return deleteDoc(incomeDoc);
    }
    UPDATE_income(income: Transaction) {
        const incomeDoc = doc(this.fire, 'Income', income.id);
        return updateDoc(incomeDoc, { ...income });
    }


//   // Income
//   //add income
//   CREATE_income(income:Transaction) {
//     income.id = this.afs.createId();
//     return this.afs.collection('/Income').add(income);
//   }
//   //get all income
//   READ_income() {
//     return this.afs.collection('/Income').snapshotChanges();
//   }
//   //delete income
//   DELETE_income(income:Transaction) {
//     return this.afs.doc('/Income/'+income.id).delete();
//   }
//   //update income
//   UPDATE_income(income:Transaction) {
//     return this.afs.doc('/Income/' + income.id).update(income);
//   }  
}
