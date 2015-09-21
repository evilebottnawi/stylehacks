'use strict';

import plugin from '../plugin';

let targets = ['ie 6'];

export default plugin(targets, ['decl'], function (decl) {
    let before = decl.raws.before;
    if (!before) {
        return;
    }
    if (~before.indexOf('_') || ~before.indexOf('-')) {
        this.push(decl, `Bad property: ${before.trim()}${decl.prop}`);
    }
});
