import mongoose from "mongoose";
const connect = async () => {
  try {
    console.log("enter db try block");
    console.log("mongourl: ", process.env.MONGODB_URL);

    await mongoose.connect(process.env.MONGODB_URL as string);
    console.log("leave db try block");
  } catch (error) {
    console.log("enter db error catch block");

    throw new Error("Connection failed!");
  }
};
export default connect;
