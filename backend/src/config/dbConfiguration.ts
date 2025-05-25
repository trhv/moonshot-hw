
import { DataSource } from "typeorm";
import {Book} from '../entities/Book'

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "moonshot",
  synchronize: true,
  logging: false,
  entities: [Book],
});