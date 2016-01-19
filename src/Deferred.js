
import {Promise} from './Promise';

class Deferred {

    constructor() {
        this.promise = new Promise();
    };

    resolve (value) {
        this.promise.trigger('fulfil', value);
    };

    reject (reason) {
        this.promise.trigger('reject', reason);
    };

    notify (value) {
        this.promise.trigger('notify', value);
    };
}

export {Deferred};
