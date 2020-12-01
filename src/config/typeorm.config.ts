import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const db: PostgresConnectionOptions = config.get('db');

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: db.type,
  host: process.env.RDS_HOSTNAME || db.host,
  port: Number(process.env.RDS_PORT) || db.port,
  username: process.env.RDS_USERNAME || db.username,
  password: process.env.RDS_PASSWORD || (db.password as string),
  database: process.env.RDS_DB_NAME || db.database,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: db.synchronize,
};
