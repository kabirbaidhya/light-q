/**
 * A lightweight version of popular javascript Promise library Q
 *
 * @author Kabir Baidhya
 */
;
var Q = (function() {
    /**
     * Create a new Deferred Object
     */
    Q.defer = function() {
        return new Q.Deferred();
    };

    return Q;
})();

if(window) {
    window.Q = Q;
}
