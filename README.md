# Employee Management Dashboard (React.js)

A Employee Management Dashboard built using React.js and plain CSS, featuring authentication, employee CRUD operations, search & filters, image upload, and print functionality.  
This project was developed as part of a React.js assignment, focusing on clean UI, reusable components, and maintainable code.


## Project Overview

The Employee Management Dashboard allows users to:
- Log in securely (mock authentication)
- View a dashboard of employees
- Add, edit, delete employees
- Upload and preview employee profile images
- Search and filter employees
- Print the employee list

The application uses **Local Storage** to persist employee data and authentication state.


## Tech Stack

- **Frontend:** React.js (JavaScript)
- **Styling:** Plain CSS 
- **Routing:** React Router DOM
- **Bundler:** Parcel
- **Data Storage:** Local Storage (Mock API)


## Features

###  Authentication
- Login page with mock authentication 
  use sample data : Example
   # example@gmail.com
   # Example@123
- Redirects to dashboard after login
- Dashboard access is restricted without login

### Employee Management
- View employee list in a table
- Add new employees
- Edit existing employees (same form reused)
- Delete employees (confirmation required)
- Toggle Active / Inactive status
- Profile image upload with preview

###  Search & Filter
- Search employees by name
- Filter by gender
- Filter by active / inactive status

###  Print
- Print employee list directly from the dashboard

### UI / UX
- Modern, clean dashboard UI
- Consistent gradient-based design
- Readable layout
- Empty states handled gracefully



