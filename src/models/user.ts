import * as mongoose from 'mongoose';

interface IUser extends mongoose.Document {
    avatarUrl?: string;
    city?: string;
    createdTime?: Date;
    gender?: string;
    mobile?: string;
    nickName?: string;
    province?: string;
    updatedTime?: Date;
}

function handlePreSave(this: IUser, next: any) {
    this.updatedTime = new Date();
    next();
}

const userSchema: mongoose.Schema = new mongoose.Schema({
    avatarUrl: String,
    city: String,
    createdTime: { type: Date, default: Date.now() },
    gender: String,
    mobile: String,
    nickName: String,
    province: String,
    updatedTime: { type: Date }
});

userSchema.pre('save', handlePreSave);

export const User = mongoose.model<IUser>('User', userSchema);
