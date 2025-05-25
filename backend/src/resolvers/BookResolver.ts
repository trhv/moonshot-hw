import {AppDataSource} from '../config/dbConfiguration'
import {Book} from '../entities/Book'
// const books = [
//   {
//     title: 'The Awakening',
//     author: 'Kate Chopin',
//   },
//   {
//     title: 'City of Glass',
//     author: 'Paul Auster',
//   },
// ];
const bookRepo = AppDataSource.getRepository(Book);
export const resolvers = {
  Query: {
    books: () =>  bookRepo.find(),
  },
};
