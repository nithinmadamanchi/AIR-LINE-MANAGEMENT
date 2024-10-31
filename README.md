# AIR-LINE-MANAGEMENT
"BOOKING AIR LINE TICKETS IN EFFICIENT WAY"
Shree Airline Management System
Welcome to Shree, a comprehensive platform designed to streamline flight ticket booking and management. With Shree, users can easily search, book, and cancel flight tickets with a seamless user experience.

Getting Started
To get started with Shree, you will need to set up your development environment with Node.js and MongoDB. Follow the steps below to get everything running on your local machine.

Prerequisites
Node.js: This is essential for running server-side JavaScript. Download and install Node.js from here.

MongoDB: Used to store application data. Instructions for installation can be found here.

Installation
Follow these steps to set up Shree on your local machine:

Clone the Repository

Clone the repository to your local machine using the following command:

git clone https://github.com/25-pranav-25/Airline-management-system.git
Install Dependencies

Navigate to the project directory and install the required dependencies:

cd Airline-management-system
npm install
Configure Environment Variables

Create a .env file in the root directory of the project and add the following environment variables:

seshSECRET=<your-session-secret>
dbSECRET=<your-database-secret>
Start the Server

Run the application with the following command:

npm start
Access the Application

Open your web browser and navigate to http://localhost:3000 to access the Shree platform.

Features
Shree offers a range of features designed to enhance user experience and functionality:

Authentication:

Secure login with email and password.
Sign-up option for new users.
Authorization:

Users must be logged in to book or cancel tickets.
Authenticated users can manage their flight bookings.
Ticket Booking:

Search for flights using various parameters.
Filter search results by price, duration, or alphabetical order.
Contact Support:

Easily reach out for any queries or support.
User Feedback:

Flash messages to inform users of actions and system responses.
Responsive Design:

Optimized for a seamless experience on all devices.
Technologies Used
Front-end
EJS: Templating engine for dynamic HTML.
Bootstrap: CSS framework for responsive design.
jQuery: JavaScript library for DOM manipulation.
Back-end
Node.js: JavaScript runtime for server-side development.
Express: Web application framework for Node.js.
MongoDB: NoSQL database for data storage.
Mongoose: ODM library for MongoDB.
Async: Utility library for asynchronous operations.
Helmet: Middleware for securing Express apps.
Passport: Authentication middleware for Node.js.
Express-session: Session management for Express.
Connect-flash: Flash messages for Express.
