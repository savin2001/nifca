# NIFCA Project Deployment Guide

## Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [npm](https://www.npmjs.com/) (Comes with Node.js)

## Installation
1. Extract the folder and place it in a desired file
2. Install dependencies:
   ```sh
   npm install
   ```

## Development Server
To start the development server, run:
```sh
npm run dev
```
This will launch the project on a local server, usually at `http://localhost:5173/`.

## Building for Production
To build the project for production, run:
```sh
npm run build
```
This will generate optimized static files in the `dist/` directory.

## Previewing Production Build
To preview the built project locally, run:
```sh
npm run preview
```

## Linting
To check for linting errors, run:
```sh
npm run lint
```

## Deployment
### Static Hosting (Netlify, Vercel, GitHub Pages, etc.)
1. Run the build command:
   ```sh
   npm run build
   ```
2. Deploy the contents of the `dist/` folder to your preferred hosting platform.

### Deploying to a Server
If deploying on a server, ensure you:
- Install dependencies (`npm install`)
- Build the project (`npm run build`)
- Configure your server to serve the `dist/` directory

## Additional Notes
- TailwindCSS and DaisyUI are used for styling.
- React Router is used for navigation.

For any issues, refer to the respective documentation or raise an issue in the project repository.

