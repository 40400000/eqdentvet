import * as migration_20260508_111004 from './20260508_111004';

export const migrations = [
  {
    up: migration_20260508_111004.up,
    down: migration_20260508_111004.down,
    name: '20260508_111004'
  },
];
