import * as mongoose from 'mongoose';

export function connectDB(url: string, options: mongoose.ConnectionOptions) {
    const db = mongoose.connection;
    db.on('error', (err) => {
        console.log('connection error:', err);
    });
    db.once('open', () => {
        console.log('connection success.');
    });
    mongoose.createConnection(url, options);
}
