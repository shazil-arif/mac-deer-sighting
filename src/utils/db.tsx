import {Data} from '../data/schema';

const dbKey = 'deer-app';
const localStorage = window.localStorage;

export const getAllData = () : Array<Data> => {
    let items = localStorage.getItem(dbKey);
    return items == null ? [] : JSON.parse(items);
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
            // important to set as [sighting], i.e array in this scenario
            localStorage.setItem(dbKey, JSON.stringify([sighting]));
        }
        return cb(true);
    }
    catch(ex){
        return cb(false);
    }  
}