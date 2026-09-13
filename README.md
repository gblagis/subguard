# SubGuard

SubGuard is a subscription management web application designed to help users track recurring payments, understand their monthly and annual spending, and avoid unwanted renewals.

The project is currently under active development. The backend foundation, authentication flow, and database schema are implemented; subscription management, the React frontend, and automated email reminders are planned next.

## Current Status

### Implemented

- Express REST API written in TypeScript
- User registration and login endpoints
- Password hashing with bcrypt
- JWT-based authentication tokens
- Request validation with Zod
- PostgreSQL data model managed with Prisma ORM
- User and subscription relationships with cascade deletion
- Database indexes for user subscriptions and renewal dates

### Planned

- Subscription CRUD endpoints
- Protected routes and authentication middleware
- Monthly and annual expense calculations
- Upcoming-renewal dashboard
- Scheduled renewal checks with Node Cron
- Email reminders with Resend or Nodemailer
- Responsive React, TypeScript, and Tailwind CSS frontend
- Filtering and categorization
- Automated tests
- Production deployment

## Core Features

When complete, SubGuard will allow users to:

- Store subscriptions and recurring contracts in one place
- Track monthly and yearly billing cycles
- View estimated monthly and annual costs
- Organize subscriptions by category
- Save renewal dates, reminder preferences, notes, and cancellation links
- Receive an email before an upcoming renewal

## Tech Stack

### Backend

- Node.js
- Express
- TypeScript
- Zod
- JSON Web Tokens
- bcrypt

### Database

- PostgreSQL
- Prisma ORM

### Frontend Roadmap

- React
- TypeScript
- Vite
- Tailwind CSS

### Automation Roadmap

- Node Cron
- Resend or Nodemailer

## Data Model

SubGuard currently contains two main entities:

- **User**: account details, preferred currency, and associated subscriptions
- **Subscription**: name, amount, billing cycle, category, renewal date, reminder period, cancellation URL, and notes

Each subscription belongs to one user. Deleting a user also removes their subscriptions.

## API Endpoints

The current API exposes the following authentication routes:

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/` | API health response |
| `POST` | `/api/auth/register` | Create a user account |
| `POST` | `/api/auth/login` | Authenticate a user and return a JWT |

### Register Request

```json
{
  "name": "George",
  "email": "george@example.com",
  "password": "secure-password"
}
```

### Login Request

```json
{
  "email": "george@example.com",
  "password": "secure-password"
}
```

## Getting Started

### Prerequisites

- Node.js
- npm
- PostgreSQL

### Installation

1. Clone the repository:

```bash
git clone https://github.com/gblagis/subguard.git
cd subguard
```

2. Install the dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/subguard"
JWT_SECRET="replace-with-a-long-random-secret"
PORT=5000
```

4. Generate the Prisma client and apply the database migrations:

```bash
npx prisma generate
npx prisma migrate dev
```

5. Start the development server:

```bash
npm run dev
```

The API will be available at `http://localhost:5000` unless a different port is configured.

## Project Structure

```text
prisma/
  migrations/          Database migrations
  schema.prisma        Prisma models and enums
src/
  controllers/         Request handlers
  lib/                 Shared services and Prisma client
  routes/              Express routes
  schemas/             Zod validation schemas
  index.ts              Application entry point
```

## Security Foundations

- Passwords are hashed before being stored
- Login credentials return generic error messages
- Incoming authentication data is validated before database operations
- Sensitive configuration is loaded from environment variables
- `.env` files are excluded from version control

## Author

Developed by [George Blagis](https://github.com/gblagis).

## License

No license has been added yet.
