import {Data} from '../data/schema';
import {writeNewEntry} from './db';

export const handleSubmit = (selectedAnimal: string) => (evt: React.BaseSyntheticEvent) => {
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

    // continue
    const target = evt.target;
    const sighting : Data = {
        lat: 43.260995, // TODO, add geocoding from address
        lng: -79.919250,
        timestamp: new Date(target.date.value),
        description: target.description.value,
        picture: target.picture.value,
        animal: selectedAnimal
    };

    writeNewEntry(sighting, (status : Boolean) => {
        alert('Status:' + status);
    });
}

export const saveFormState = (ref: any) => {

}