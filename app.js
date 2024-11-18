// Load environment variables in non-production mode
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config();
}
// Import required modules
const express = require("express"),
mongoose = require("mongoose"),
ejsMate = require("ejs-mate"),
path = require("path"),
session = require("express-session"),
flash = require("connect-flash"),
passport = require("passport"),
LocalStrategy = require("passport-local"),
mongoSanitize = require("express-mongo-sanitize"),
helmet = require("helmet"),
MongoStore = require("connect-mongo");

// Import the User model
const User = require("./models/user");

// Import route handlers
const flightRoutes = require("./routes/flight");
const authRoutes = require("./routes/auth");

// MongoDB connection
const dbUrl = process.env.dbURL || "mongodb://localhost:27017/avian";
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error:"));
db.once("open", () => {
    console.log("Database Connected");
});

// Initialize Express app
const app = express();

// Set up EJS as templating engine with ejs-mate for layout support
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Set up session storage in MongoDB
const store = MongoStore.create({
    mongoUrl: dbUrl,
    secret: process.env.dbSECRET || "defaultSecret",  // Ensure a fallback secret
    touchAfter: 24 * 60 * 60  // Prevent excessive re-saving of session
});

store.on("error", (err) => {
    console.log("Session Store Error", err);
});

// Configure sessions with MongoDB storage and security settings
const sessionConfig = {
    store,
    name: "sesh",  // Custom cookie name
    secret: process.env.seshSECRET || "defaultSessionSecret", // Use fallback secret if env not set
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,  // Prevent client-side script access to cookies
        // secure: true, // Enable in production to require HTTPS
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,  // One-week expiration
        maxAge: 1000 * 60 * 60 * 24 * 7  // One week in milliseconds
    }
};
app.use(session(sessionConfig));

// Middleware for sanitizing input to prevent MongoDB operator injection
app.use(mongoSanitize());

// Flash messages for one-time display of success/error messages
app.use(flash());

// Helmet for setting various HTTP headers for security
app.use(helmet({ contentSecurityPolicy: false }));

// Initialize and configure Passport for user authentication
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Middleware to make flash messages and user data globally available to templates
app.use((req, res, next) => {
    if (req.originalUrl !== "/login") req.session.returnTo = req.originalUrl;
    res.locals.currentUser = req.user;
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});

// Use route handlers for flight and auth routes
app.use("/", flightRoutes);
app.use("/", authRoutes);

// Catch-all route for undefined routes (redirect to home)
app.all("*", (req, res, next) => {
    res.redirect("/");
});

// Error handling middleware for displaying an error flash message
app.use((err, req, res, next) => {
    console.log(err.message);
    req.flash("error", "Oh No, Something Went Wrong!");
    res.redirect("/");
});

// Start server on specified port or default to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server live at ${port}`);
});
