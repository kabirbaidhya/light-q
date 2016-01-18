Q.Deferred = (function() {

    function Deferred() {
        this.promise = new Q.Promise();
    }

    Deferred.prototype.resolve = function(value) {
        p.trigger('fulfil', value);
    };

    Deferred.prototype.reject = function(reason) {
        p.trigger('reject', reason);
    };

    Deferred.prototype.notify = function(value) {
        p.trigger('notify', value);
    };

    return Deferred;
})();
