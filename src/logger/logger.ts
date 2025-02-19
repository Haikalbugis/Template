import winston from "winston";

const customLevels = {
    levels: {
      error: 0,
      warn: 1,
      info: 2,
      success: 3,
      debug: 4,
    },
    colors: {
      error: "red",
      warn: "yellow",
      info: "blue",
      success: "green",
      debug: "gray",
    },
};

winston.addColors(customLevels.colors);

export const logger = winston.createLogger({
    levels: customLevels.levels,
    level: "debug",
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
    ),
    transports: [new winston.transports.Console()]
})

declare module "winston" {
    interface Logger {
      success: (message: string) => void;
    }
}
  
logger.success = (message: string) => {
    logger.log({ level: "success", message });
};