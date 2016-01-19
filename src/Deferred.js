
import {Promise} from './Promise';

var Deferred = (function() {

    // Handler's Queue
    var handlers = new WeakMap();

    class Deferred {

        constructor() {
            this.promise = new Promise(this);
            this.isPending = true;

            // Setup handlers
            handlers.set(this, {
                fulfil:[],
                reject:[],
                notify:[]
            });
        };

        resolve (value) {
            this.trigger('fulfil', value);
        };

        reject (reason) {
            this.trigger('reject', reason);
        };

        notify (value) {
            this.trigger('notify', value);
        };

        on(event, handler) {
            if (this.isPending) {
                handlers.get(this)[event].push(handler);
            }

            return this;
        };

        trigger (event, params) {
            if (this.isPending) {
                var queue = handlers.get(this)[event];

                while (queue.length > 0) {
                    var callback = queue.shift();
                    callback(params);
                }

                if (event === 'fulfil' || event === 'reject') {
                    this.isPending = false;
                }
            }

            return this;
        }
    }

    return Deferred;
})();

export {Deferred};
