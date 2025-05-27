
## Introduction
This is a very simplified employee management system.
The project is built with three views; an start page, list view and a create view. The data consists of a list of `employee` records store in redux. A complete example of an `employee` entry is available in `src/redux/employees/index.js`.

Your task is to extend the current funcitonality and implement new features and views. Here is the list of things to be implemented:

- Additional fields to the employee creation page with proper field validation (`src/components/Create/index.js`).
  - Birth date - `YYYY-MM-DD`
  - Status - <`ACTIVE` | `LEAVE_OF_ABSENCE` | `TERMINATED`>
  - Job title
- Enhance the page for all employees (`src/components/View/index.js`)
  - Display all employees
  - Edit/Delete
  - Functions that might be useful when viewing potentially large lists of data (Pagination, Filters, Search)
- Optional:
  - Creative flare - enhance the application's styling
  - Setup a basic backend service to fetch the data and initialize the context
  - Re-create the project as a Nextjs Project.

## Time

We don't expect you to spend more than 8 hours on this test. If you are under time constraints, complete the tasks you started and we can discuss the rest in the interview.

## Required technologies

- [node v16](https://nodejs.org/en/download/releases).
- [`nvm`](https://github.com/nvm-sh/nvm) can help with node versioning.

## Setup

- Clone this repo.
- Run `npm install`
- Run `npm start`

## What's expected?

A working application with the above functionality, perhaps a little more. We would like to see an eye for detail and that the code was written for maintainability and scalability.

Things we're looking for:

- Naming
- Structure
- A sound understanding of the basics (JSX, hooks, redux etc)
- Usage of components
- User interaction - feedback