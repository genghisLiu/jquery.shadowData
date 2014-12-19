(function (root, factory) {
    'use strict';
    if (typeof exports === 'object') {        //node
        module.exports = factory(require('jquery', 'lodash'));
    } else if (typeof define === 'function' && define.amd) {         //amd
        define(['jquery', 'lodash'], factory);
    } else { //global (window domain)
        factory(root.jQuery, root._);
    }
}(this, function ($, _) {
    'use strict';

    var _setting = {};
    var DEFAULT_OPTION = {
        index: 1,
        replace: null
    }

    function dataChange(){   // when the shadow data is changed ,it should notify origin data

    }

    function transformColumn(columns, records) {
        var columns_cb = {
            targetstatus: 1,
            ViewDetails: 2,
            coursestartdate: 3,
            courseenddate: 4
        };

        _.forOwn(columns_cb, function (cb, key) {
            var i = _.findIndex(columns, {
                ColumnKey: key
            });
            if (i !== -1) {
                _.map(records, function (record, index) {
                    record[i] = cb(record[i]);
                });
            }
        });
        return records;
    }

    $.fn.shadowData = function (options) {
        if (!arguments.length) {
            return getDefaultValue.call(this);
        } else {
            return setDefaultValue.apply(this, arguments);
        }
    };

}));