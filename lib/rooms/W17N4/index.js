// Primary room

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _config = require('../../config');

var roomName = 'W17N4';

exports['default'] = {
  name: roomName,
  wallHealth: 40000,
  roadHealth: 2000,
  spawnIds: ['55defc603a94852a6ddf657e'],
  links: {
    transmitterIds: ['55e4d627002b197809962d40', '55ebd31b30de2f106e550700'],
    receiverId: '55ea5371ec54fa140a98012e'
  },
  creepCount: {
    harvester: 9,
    W18N4_forager: 8,
    W17N3_forager: 8,
    worker: 7,
    guard: 9,
    warrior: 0
  },
  creepSchema: {
    harvester: {
      bodyParts: [CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE],
      name: 'Harvester' + _config.currentTime,
      memory: {
        role: 'harvester',
        born: _config.currentTime,
        origin: {
          name: 'W17N4'
        },
        source: _config.currentTime % 2
      }
    },
    W18N4_forager: {
      bodyParts: [CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE],
      name: 'Forager' + _config.currentTime,
      memory: {
        role: 'forager',
        born: _config.currentTime,
        source: _config.currentTime % 2,
        origin: {
          name: 'W17N4',
          exit: '0, 41'
        },
        destination: {
          name: 'W18N4',
          exit: '49, 40',
          sourceId: '55c34a6b5be41a0a6e80badb'
        },
        passThroughRoomIndex: 0
      }
    },
    W17N3_forager: {
      bodyParts: [CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE],
      name: 'Forager' + _config.currentTime,
      memory: {
        role: 'forager',
        born: _config.currentTime,
        source: _config.currentTime % 2,
        origin: {
          name: 'W17N4',
          exit: '31, 49'
        },
        destination: {
          name: 'W17N3',
          exit: '31, 0',
          sourceId: '55c34a6b5be41a0a6e80c3cc'
        },
        passThroughRoomIndex: 0
      }
    },
    worker: {
      bodyParts: [CARRY, CARRY, WORK, WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE],
      name: 'Worker' + _config.currentTime,
      memory: {
        role: 'worker',
        born: _config.currentTime,
        origin: {
          name: 'W17N4'
        },
        source: _config.currentTime % 2,
        willRepair: _config.currentTime % 2
      }
    },
    guard: {
      bodyParts: [RANGED_ATTACK, RANGED_ATTACK, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, MOVE],
      name: 'Guard' + _config.currentTime,
      memory: {
        role: 'guard',
        born: _config.currentTime,
        origin: {
          name: 'W17N4'
        },
        source: _config.currentTime % 2,
        idlePos: '28, 29'
      }
    },
    warrior: {
      bodyParts: [RANGED_ATTACK, TOUGH, MOVE],
      name: 'Warrior' + _config.currentTime,
      memory: {
        role: 'warrior',
        born: _config.currentTime,
        origin: {
          name: 'W17N4'
        },
        source: _config.currentTime % 2,
        idlePos: '28, 29'
      }
    }
  }
};
module.exports = exports['default'];