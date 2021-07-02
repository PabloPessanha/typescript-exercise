/* eslint-disable */
import { typeAssert, IsTypeEqual } from '../type-assertions';
import { User, logPerson, users } from '../exercise1';

typeAssert<IsTypeEqual<User, {name: string, age: number, occupation: string}>>();
typeAssert<IsTypeEqual<typeof users, {name: string, age: number, occupation: string}[]>>();
typeAssert<IsTypeEqual<typeof logPerson, (user: {name: string, age: number, occupation: string}) => void>>();
