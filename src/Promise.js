Q.Promise = (function() {

    var callbacks = {
        fulfil:[],
        reject:[],
        notify:[]
    };

    function Promise() {

    }

    Promise.prototype.trigger = function(type, params) {
        var handlers = callbacks[type];

        for(var i in handlers) {
            // Trigger the corresponding handler with parameters
            handlers[i](params);
        }
    };

    Promise.prototype.then = function(onFulfilled, onRejected, onNotified) {
        if (isFunction(onFulfilled)) {
            callbacks.fulfil.push(onFulfilled);
        }

        if (isFunction(onRejected)) {
            callbacks.reject.push(onRejected);
        }

        if (isFunction(onNotified)) {
            callbacks.notify.push(onNotified);
        }

        return this;
    };

    function isFunction(thing) {
        return (typeof(thing) === 'function');
    }

    return Promise;
})();
