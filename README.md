

# Shree Airline Management System

Welcome to Shree, a comprehensive platform designed to streamline flight ticket booking and management. With Shree, users can easily search, book, and cancel flight tickets with a seamless user experience.

## Getting Started

To get started with Shree, you will need to set up your development environment with Node.js and MongoDB. Follow the steps below to get everything running on your local machine.

### Prerequisites

1. **Node.js**: This is essential for running server-side JavaScript. Download and install Node.js from [here](https://nodejs.org/en/download/).

2. **MongoDB**: Used to store application data. Instructions for installation can be found [here](https://docs.mongodb.com/manual/installation/).

### Installation

Follow these steps to set up Shree on your local machine:

1. **Clone the Repository**

   Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/nithinmadamanchi/Airline-management-system.git
   ```

2. **Install Dependencies**

   Navigate to the project directory and install the required dependencies:

   ```bash
   cd Airline-management-system
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the root directory of the project and add the following environment variables:

   ```env
   seshSECRET=<your-session-secret>
   dbSECRET=<your-database-secret>
   ```

4. **Start the Server**

   Run the application with the following command:

   ```bash
   npm start
   ```

5. **Access the Application**

   Open your web browser and navigate to `http://localhost:3000` to access the Shree platform.

## Features

Shree offers a range of features designed to enhance user experience and functionality:

- **Authentication**:
  - Secure login with email and password.
  - Sign-up option for new users.

- **Authorization**:
  - Users must be logged in to book or cancel tickets.
  - Authenticated users can manage their flight bookings.

- **Ticket Booking**:
  - Search for flights using various parameters.
  - Filter search results by price, duration, or alphabetical order.

- **Contact Support**:
  - Easily reach out for any queries or support.

- **User Feedback**:
  - Flash messages to inform users of actions and system responses.

- **Responsive Design**:
  - Optimized for a seamless experience on all devices.

## Technologies Used

### Front-end

- **[EJS](http://ejs.co/)**: Templating engine for dynamic HTML.
- **[Bootstrap](https://getbootstrap.com/)**: CSS framework for responsive design.
- **[jQuery](https://jquery.com/)**: JavaScript library for DOM manipulation.

### Back-end

- **[Node.js](https://nodejs.org/en/)**: JavaScript runtime for server-side development.
- **[Express](https://expressjs.com/)**: Web application framework for Node.js.
- **[MongoDB](https://www.mongodb.com/)**: NoSQL database for data storage.
- **[Mongoose](http://mongoosejs.com/)**: ODM library for MongoDB.
- **[Async](http://caolan.github.io/async/)**: Utility library for asynchronous operations.
- **[Helmet](https://helmetjs.github.io/)**: Middleware for securing Express apps.
- **[Passport](http://www.passportjs.org/)**: Authentication middleware for Node.js.
- **[Express-session](https://github.com/expressjs/session#express-session)**: Session management for Express.
- **[Connect-flash](https://github.com/jaredhanson/connect-flash#connect-flash)**: Flash messages for Express.

