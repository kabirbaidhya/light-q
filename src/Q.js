
import {Deferred} from './Deferred';

/**
 * A lightweight version of popular javascript Promise library Q
 *
 * @author Kabir Baidhya
 */
class Q {
    static defer() {
        return new Deferred();
    };
}

// For browser-based applications, make this globally accesible
if (typeof(window) !== 'undefined') {
    window.Q = Q;
}

export {Q};
