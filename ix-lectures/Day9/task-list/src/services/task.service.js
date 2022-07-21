import {
  collection, addDoc,
  updateDoc, doc,
  deleteDoc, getDocs, query 
} from "firebase/firestore";
import { firestore } from '../firebase/firebase';
import { Task } from "../models/task";

class TaskService {

  constructor() {
    this.collection = 'tasks';
  }


  async createTask(task) {
    const collectionReference = collection(firestore, this.collection);
    const docRef = await addDoc(collectionReference, {
      name: task.name,
      complete: task.complete,
    });

    task.id = docRef.id;
    return task;
  }

  async readTasks() {
    const collectionReference = collection(firestore, this.collection);
    const q = query(collectionReference);

    const querySnapshot = await getDocs(q);

    const tasks = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      
      const task = new Task(
        doc.id,
        data.name,
        data.complete
      );
      tasks.push(task);
    });

    return tasks;
  }

  async updateTask(task) {
    const docRef = doc(firestore, this.collection, task.id);

    await updateDoc(docRef, {
      name: task.name,
      complete: task.complete,
    });

    return task;
  }

  async deleteTask(task) {
    const docRef = doc(firestore, this.collection, task.id);
    await deleteDoc(docRef);
  }

}

const service = new TaskService();

export default service;