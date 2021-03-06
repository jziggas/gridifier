/* Gridifier v2.~.~ source file for custom build.
 * Async Responsive HTML Grids
 * http://gridifier.io
 * 
 * Gridifier is dual-licensed:
 *   GPLV3 per non-commercial usage; 
 *   Commercial license per commercial usage.
 * Read http://gridifier.io/license for details.
 * Copyright 2015 nTech
 */

var VgCoordsFinder = function() {};

proto(VgCoordsFinder, {
    find: function(a, b, c) {
        var d = srManager.itemSizes(b);
        var e = parseFloat;
        if (a == OPS.APPEND) return {
            x1: e(c.x),
            x2: e(c.x + d.width - 1),
            y1: e(c.y),
            y2: e(c.y + d.height - 1)
        };
        if (a == OPS.REV_APPEND) return {
            x1: e(c.x - d.width + 1),
            x2: e(c.x),
            y1: e(c.y),
            y2: e(c.y + d.height - 1)
        };
        if (a == OPS.PREPEND) return {
            x1: e(c.x),
            x2: e(c.x + d.width - 1),
            y1: e(c.y - d.height + 1),
            y2: e(c.y)
        };
        if (a == OPS.REV_PREPEND) return {
            x1: e(c.x - d.width + 1),
            x2: e(c.x),
            y1: e(c.y - d.height + 1),
            y2: e(c.y)
        };
    }
});