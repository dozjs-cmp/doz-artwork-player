import {define, createDozWebComponent} from 'doz'
import cmp from './src'

// expose component to global scope
function register() {
    if (typeof window !== 'undefined') {
        define('doz-artwork-player', cmp);
        createDozWebComponent('doz-artwork-player', cmp, [
            'image-url',
            'audio-url',
            'height',
            'width',
            'border-radius'
        ]);
    }
}

register();

export default cmp

if (module.hot) {
    module.hot.dispose(function () {
        register();
    })
}
