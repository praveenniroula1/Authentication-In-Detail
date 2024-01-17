import mongoose from "mongoose";

export const dbConfig = () => {
  try {
    const MONGO_CLIENT = "mongodb://localhost/PrasanGhimire";
    const connection = mongoose.connect(MONGO_CLIENT);
    if (connection) {
      connection &&
        console.log(`MongoDb connection has been successfully Made.`);
    }
  } catch (error) {
    console.log(error);
  }
};
