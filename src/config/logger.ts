import winston, { Logger } from 'winston';
import { config } from './index';
const logger: Logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
  ),
  defaultMeta: { service: 'auth-service' },
  transports: [
    new winston.transports.File({
      dirname: 'logs',
      filename: 'combined.log',
      level: 'debug',
      silent: config.NODE_ENV === ' DEVELOPMENT',
    }),
    new winston.transports.File({
      dirname: 'logs',
      filename: 'error.log',
      level: 'error',
      silent: config.NODE_ENV === 'DEVELOPMENT',
    }),
    new winston.transports.Console({
      level: 'info',
      silent: false,
    }),
  ],
  exitOnError: false,
});

export default logger;
