import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'sqlite',
  database: 'db/sql',
  synchronize: true,
  entities: ['src/**/*.entity{.ts,.js}'],
};
