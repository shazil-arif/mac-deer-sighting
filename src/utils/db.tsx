import { constants } from 'os';
import {Data} from '../data/schema';

const dbKey = 'deer-app';
const localStorage = window.localStorage;

export const getAllData = () : Array<Data> => {
    return JSON.parse(localStorage.getItem(dbKey) || "");
}

/**
 * Invoke cb with true or false depending on whether write was succesful
 */
export const writeNewEntry = (sighting: Data, cb : (status: Boolean) => void) => {
    try{
        const currentData = localStorage.getItem(dbKey);
        if (currentData != null){
            const arr = JSON.parse(currentData);
            arr.push(sighting);
            localStorage.setItem(dbKey, JSON.stringify(arr));
        }
        else{
            localStorage.setItem(dbKey, JSON.stringify([sighting]));
        }
        return cb(true);
    }
    catch(ex){
        return cb(false);
    }  
}