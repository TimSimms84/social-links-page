# Social Links

This is a simple React application that displays social links for a list of people. The application is responsive and works well on both desktop and mobile devices.

## Features

- Responsive design for desktop and mobile
- Smooth hover animations
- Easy-to-update list of people with their social links

## Getting Started

### Prerequisites

To run this project, you'll need the following installed on your system:

- [Node.js](https://nodejs.org/) (v12.0 or higher)
- [npm](https://www.npmjs.com/) (v6.0 or higher)

### Installation

1. Clone this repository: git clone https://github.com/TimSimms84/social-links.git

2. Change into the project directory: cd social-links

3. Install the project dependencies: npm install

4. Start the development server: npm start


The application should now be running at `http://localhost:3000/`.

## Usage

To add or modify the list of people and their social links, simply update the `people` array in `src/App.js`.

Example:

```javascript
const people = [
  {
    name: 'John Doe',
    github: 'https://github.com/johndoe',
    linkedin: 'https://www.linkedin.com/in/johndoe/',
  },
  {
    name: 'Jane Smith',
    github: 'https://github.com/janesmith',
    linkedin: 'https://www.linkedin.com/in/janesmith/',
  },
  // Add more people here
];
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License. See the LICENSE file for details.


