'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _queriesEnergyStorage = require('../queries/energy-storage');

var _queriesEnergyStorage2 = _interopRequireDefault(_queriesEnergyStorage);

exports['default'] = function () {
  Creep.prototype.recharge = function () {
    var source = _queriesEnergyStorage2['default'].energyForRecharging(undefined.room)[undefined.memory.source || energyForRecharging.length - 1];

    creep.moveTo(source);
    source.transferEnergy(creep);
  };
};

module.exports = exports['default'];