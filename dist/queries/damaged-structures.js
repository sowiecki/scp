'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var structuresNeedingRepair = function structuresNeedingRepair(room) {
  var structuresNeedingRepair = [];
  room.find(FIND_STRUCTURES, {
    filter: function filter(structure) {
      if (structure.hitsMax > 1 && structure.hits < _config2['default']) {
        structuresNeedingRepair.push(i);
      }
    }
  });
  return structuresNeedingRepair;
};
exports.structuresNeedingRepair = structuresNeedingRepair;