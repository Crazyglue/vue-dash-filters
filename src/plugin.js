import _ from 'lodash';

function install(Vue) {
    if (install.installed) {
        return;
    }

    Object.entries(_).forEach(([ key, fn ]) => {
        Vue.filter(key, (...params) => fn(...params));
    });
}

export default {
    install
};
