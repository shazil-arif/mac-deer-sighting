/**
 * Almost like an event Emitter
 */
type CallbackWithLatLngParams = (lat: number, lng: number) => void;
const emptyFunction = () => {};

class Store{
    lat: number = 0;
    lng: number = 0;
    cb: CallbackWithLatLngParams = emptyFunction;
 
    set(lat: number, lng: number){
        this.lat = lat;
        this.lng = lng;
        if (this.cb !== emptyFunction){
            this.__notify();
        }
    }

    subscribe(cb : (lat: number, lng: number) => void){
        this.cb = cb;
    }

    __notify(){
        this.cb(this.lat, this.lng);
        this.cb = emptyFunction;
    }
}

export default new Store();