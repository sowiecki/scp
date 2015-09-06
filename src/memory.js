import rooms from './rooms';

export default () => {
  for (let room in rooms) {
    Memory.rooms[room].structuresNeedingRepair = [];
    Memory.rooms[room].structuresNeedingConstruction = [];
    Memory.rooms[room].sources = [];
    Memory.rooms[room].stores = {
      energyStores: [],
      fullEnergyStores: []
    };
    Memory.rooms[room].creepCount = {};
  }
};
