
import * as util from './util/utils';

var Promise = (function() {

    var callbacks = {
        fulfil:[],
        reject:[],
        notify:[]
    };

    class Promise {
        constructor() {

        }

        trigger (type, params) {
            var handlers = callbacks[type];

            for(var i in handlers) {
                // Trigger the corresponding handler with parameters
                handlers[i](params);
            }
        };

        then (onFulfilled, onRejected, onNotified) {
            if (util.isFunction(onFulfilled)) {
                callbacks.fulfil.push(onFulfilled);
            }

            if (util.isFunction(onRejected)) {
                callbacks.reject.push(onRejected);
            }

            if (util.isFunction(onNotified)) {
                callbacks.notify.push(onNotified);
            }

            return this;
        };
    }

    return Promise;
})();

export {Promise};
