import app from './app';
import { config } from './config';
import logger from './config/logger';

const startServer = () => {
  try {
    app.listen(config.PORT, () => {
      logger.info('Server listeing on PORT', config.PORT);
    });
  } catch (err) {
    if (err instanceof Error) {
      logger.error(err.message);
      setTimeout(() => {
        process.exit(1);
      }, 1000);
    }
  }
};

startServer();
