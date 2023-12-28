import dotenv from 'dotenv';

dotenv.config({});

const { NODE_ENV, PORT } = process.env;

export const config = { NODE_ENV, PORT };
