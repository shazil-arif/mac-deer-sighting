import {Data} from '../data/schema';
import {writeNewEntry} from './db';

export const handleSubmit = (formData: Data, evt: React.BaseSyntheticEvent) : Boolean => {
    const fields = ['date', 'time', 'location','picture', 'description'];

    const validateFormData = (evt : any) : Boolean => {
        for (const field of fields){
            if (evt.target[field].value == null){
                return false;
            }
        }
        return true;
    }

    evt.preventDefault();

    if (!validateFormData(evt)) {
        alert('Something went wrong. Please refill the data');
    }

    return writeNewEntry(formData);
}
