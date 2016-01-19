
import * as util from './util/utils';

var Promise = (function() {
    var d;

    class Promise {
        constructor(deferred) {
            d = deferred;
        }

        then (onFulfilled, onRejected, onNotified) {
            if (util.isFunction(onFulfilled)) {
                d.on('fulfil', onFulfilled);
            }

            if (util.isFunction(onRejected)) {
                d.on('reject', onRejected);
            }

            if (util.isFunction(onNotified)) {
                d.on('notify', onNotified);
            }

            return this;
        };

        isPending() {
            return d.isPending;
        };
    }

    return Promise;
})();

export {Promise};
