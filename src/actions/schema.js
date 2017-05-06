import { Schema, arrayOf } from 'normalizr';

export const burger = new Schema('burgers');
export const arrayOfBurgers = arrayOf(burger);
