
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/admin', {
    dbName: 'admin',
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to the database');
})
.catch((err) => {
    console.error('Error connecting to the database:', err);
});

// Schema for users of the app
const UserSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
const User = mongoose.model('users', UserSchema);
User.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listens at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
    resp.send("App is Working");
    // You can check if the backend is working or not by 
    // entering http://localhost:5000

    // If you see "App is working," it means
    // the backend is working properly
});



app.post("/register", async (req, resp) => {
    try {
        const user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            delete result.password;
            resp.send(req.body);
            console.log(result);
        } else {
            console.log("User already registered");
        }
    } catch (e) {
        resp.send("Something Went Wrong");
    }
});

app.listen(5000);
