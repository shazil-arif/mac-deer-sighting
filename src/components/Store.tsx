/**
 * Almost like an event Emitter
 */
class Store{
    lat: number = 0;
    lng: number = 0;
    cbs: Array<Function> = [];
 
    setLat(lat: number){
        this.lat = lat;
    }
    setLng(lng: number){
        this.lng = lng;
    }
    subscribe(cb : (lat: number, lng: number) => void){
        this.cbs.push(cb);
    }

    notify(){
        this.cbs[0](this.lat, this.lng);
    }
}

export default new Store();