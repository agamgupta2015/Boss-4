const mongoose = require("mongoose");
//const mongoUrl = process.env.MONGODB_URI;
//process.env.MONGODB_URI
function databaseConnection() {
    mongoose.set("strictQuery", true);
    mongoose
        .connect("mongodb+srv://agam_:ZfuMMFdVOXddsvcf@db.re150tm.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Database Connected Successfully");
        })
        .catch((err) => {
            console.log("Database Not Connected Successfully : " + err);
        });
}

module.exports = databaseConnection;
