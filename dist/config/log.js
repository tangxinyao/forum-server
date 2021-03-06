"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const accessLogPath = path.resolve(__dirname, '../log/access.log');
const errorlogPath = path.resolve(__dirname, '../log/error.log');
exports.logConfig = {
    appenders: {
        access: {
            appender: 'accessFile',
            level: 'info',
            maxLevel: 'info',
            type: 'logLevelFilter'
        },
        accessFile: {
            backups: 3,
            filename: accessLogPath,
            maxLogSize: 10485760,
            type: 'file'
        },
        email: {
            SMTP: {
                auth: {
                    pass: 'shaytang1994',
                    user: 'shaytang@163.com'
                },
                host: 'smtp.163.com',
                port: 465
            },
            sendInterval: 60000,
            type: 'smtp'
        },
        error: {
            appender: 'errorFile',
            level: 'error',
            type: 'logLevelFilter'
        },
        errorFile: {
            backups: 3,
            filename: errorlogPath,
            maxLogSize: 10485760,
            type: 'file'
        }
    },
    categories: {
        default: {
            appenders: ['access', 'error'],
            level: 'all'
        },
        email: {
            appenders: ['email'],
            level: 'error'
        }
    }
};
