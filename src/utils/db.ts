import * as mongoose from 'mongoose';

export function connectDB(url: string, options: mongoose.ConnectionOptions) {
    (mongoose as any).Promise = global.Promise;

    const db = mongoose.connection;
    db.on('error', (err) => {
        console.log('connection error:', err);
    });
    db.once('open', () => {
        console.log('connection success.');
    });

    mongoose.connect(url, options);
}
