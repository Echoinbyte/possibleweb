import mongoose, { Connection } from "mongoose";

interface Cached {
    conn: Connection | null;
    promise: Promise<Connection> | null;
}

const MONGODB_URL: string | undefined = process.env.MONGODB_URL;

if (!MONGODB_URL) {
    throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
    )
}

declare const global: {
    mongoose: Cached;
};

let cached: Cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

const dbConnect = async (): Promise<Connection> => {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        };

        cached.promise = mongoose.connect(MONGODB_URL!, opts).then((mongoose) => {
            return mongoose.connection;
        })
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn!;
}

export default dbConnect;
