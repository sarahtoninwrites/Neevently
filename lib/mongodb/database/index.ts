import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI
let cached = (global as any).mongoose || {conn: null, promise:null};

export const connectToDatabase = async()=>{
  if(cached.com) return cached.com;
  if(!MONGODB_URI) throw new Error('MONGODB_URI is missing');

  cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
    dbName: 'neevently',
    bufferCommands: false,
  })
  cached.conn = await cached.promise;
  return cached.com;
}