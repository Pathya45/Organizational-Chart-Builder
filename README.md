# Organizational-Chart-Builder


This is a React application for building and managing an organization chart. Users can add, edit, and delete positions in the chart and define parent-child relationships between positions.

## Features:

- Add, edit, and delete positions
- Define parent-child relationships for an organization chart structure
- User-friendly interface with CSS styling

## Getting Started:

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites:

Make sure you have the following software installed:

- [Node.js](https://nodejs.org/) (version 14.x or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name

2. Install dependencies:

   Using npm:
   ```
   npm install
   ```
   Or, using yarn:
   ```
   yarn install
   ```

3. Running the Project
To start the development server, run:

   Using npm:
   ```
   npm start
   ```
   Or, using yarn:
   ```
   yarn start
   ```

4. Folder Structure

	```
	project-root
	│
	├── public
	│
	└── src
	    ├── components
	    │   ├── Chart.jsx
	    │   └── Position.jsx
	    │
	    ├── context
	    │   └── ChartContext.jsx
	    │
	    ├── styles
	    │   ├── App.css
	    │   └── Position.css
	    │
	    ├── App.css
	    ├── App.js
	    ├── App.test.js
	    ├── index.css
	    ├── index.js
	    ├── logo.svg
	    ├── reportWebVitals.js
	    └── setupTests.js
	 ```

 ### Explanation of Folders and Files:

- components/: Contains the React components like Chart.jsx and Position.jsx for your organizational chart.
- context/: Holds the context file (ChartContext.jsx) for managing state across the application.
- styles/: CSS files specific to the components, such as App.css and Position.css.
- App.js: Main app component.
- index.js: Entry point of the React app.
- public/: Holds static assets and the main index.html.

## Open the Project in Your Browser:

By default, React apps run on http://localhost:3000. Open this address in your browser to view the app.

## Additional Tips:

If you encounter permission issues with npm or Node modules, you may need to run with sudo (for Mac/Linux).
If the project uses environment variables (such as in a .env file), make sure to add them before starting.

## Video Presentation: 

https://www.loom.com/share/0ba42b7b36f0487baa723e9f8bc62506?sid=cde99f89-c843-4360-b293-b0627918a6ba

In this video, I explain the creation of an organizational chart builder app, detailing the components like the file structure, code, and functionalities. I showcase how to build the app step by step, from defining the chart and positions to managing relationships and operations. Viewers will learn about key concepts such as context API, styles, and utilizing React Hooks for state management.
