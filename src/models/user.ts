import * as mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
    avatarUrl?: string;
    city?: string;
    createdTime?: Date;
    gender?: number;
    mobile?: string;
    nickName?: string;
    openId?: string;
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
    gender: Number,
    mobile: String,
    nickName: String,
    openId: String,
    province: String,
    updatedTime: { type: Date }
});

userSchema.pre('save', handlePreSave);

export const User = mongoose.model<IUser>('User', userSchema);
