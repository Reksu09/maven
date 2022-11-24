const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config()
const Gned02 = require("./models/gned02.model.js");
const Gned06 = require("./models/gned06.model.js");
const Gned11 = require("./models/gned11.model.js");
const Dcit21 = require("./models/dcit21.model.js");
const Dcit22 = require("./models/dcit22.model.js");
const Cosc50 = require("./models/cosc50.model.js");
const Fitt1 = require("./models/fitt1.model.js");
const URI = `mongodb+srv://${process.env.USER}@reviewer-website.locq5xx.mongodb.net/?retryWrites=true&w=majority`

app.use('/', express.static(path.join(__dirname, '/client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
  });

const subs = [
    {
        resource: Gned02
    },
    {
        resource: Gned06
    },
    {
        resource: Gned11
    },
    {
        resource: Dcit21
    },
    {
        resource: Dcit22
    },
    {
        resource: Cosc50
    },
    {
        resource: Fitt1
    },

]

/////////// ADMIN JS ///////////

const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const AdminJSMongoose = require("@adminjs/mongoose")

AdminJS.registerAdapter(AdminJSMongoose)

const DEFAULT_ADMIN = {
    email: process.env.ADMIN_USERNAME,
    password:  process.env.ADMIN_PASSWORD,
  }

const adminJs = new AdminJS({
    resources: subs,
    rootPath: "/admin", // Path to the AdminJS dashboard.
});

const router = AdminJSExpress.buildAuthenticatedRouter(
    adminJs,
    {
        cookieName: "adminjs",
        cookiePassword: "complicatedsecurepassword",
        authenticate: async (email, password) => {
            if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
                return Promise.resolve(DEFAULT_ADMIN)
            }
            return null
        },
    },
    null,
    // Add configuration required by the express-session plugin.
    {
        resave: false, 
        saveUninitialized: true,
    }
);

app.use(adminJs.options.rootPath, router);
// Run the server.

/////////// ADMIN JS ///////////

app.use(cors());
app.use(express.json());
mongoose.connect(URI, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Connected to MongoDB");
})

const Gned02Router = require("./routes/gned02");
const Gned06Router = require("./routes/gned06");
const Gned11Router = require("./routes/gned11");
const Dcit21Router = require("./routes/dcit21");
const Dcit22Router = require("./routes/dcit22");
const Cosc50Router = require("./routes/cosc50");
const Fitt1Router = require("./routes/fitt1");

app.use("/subjects", Gned02Router);
app.use("/subjects", Gned06Router);
app.use("/subjects", Gned11Router);
app.use("/subjects", Dcit21Router);
app.use("/subjects", Dcit22Router);
app.use("/subjects", Cosc50Router);
app.use("/subjects", Fitt1Router);


app.listen(process.env.PORT || 5000, () => {
    console.log(`AdminJS started on http://localhost:8080${adminJs.options.rootPath}`);
})