import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to database");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});

    console.log(db);

    connection.isConnected = db.connection[0].readyState;
    console.log(db.connection);
    console.log("DB connected Successfully");
  } catch (error) {
    console.log("Database connection error: " + error);
    process.exit(1);
  }
}

export default dbConnect;
