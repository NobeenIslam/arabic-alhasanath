# Al-Arabi Institute Landing Page

This is a modern, responsive landing page for Al-Arabi Institute built with Next.js, TypeScript, and Tailwind CSS.
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- Responsive design optimized for various screen sizes
- Smooth scrolling navigation
- Dynamic content sections including Hero, Instructor, Course Structure, Testimonials, and Sign-Up
- Integration with Wistia for video content
- Email submission functionality
- SVG icon support

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone [repository-url]
   cd arabic-alhasnath
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Set up environment variables in env.local

```
EMAIL_USERNAME=[your-email]
EMAIL_PASSWORD=[your-email-password]
EMAIL_HOST=[your-email-host]
```

## Project Structure

- `app/`: Contains the main application code
  - `layout.tsx`: The root layout component
  - `page.tsx`: The main page component
  - `globals.css`: Global styles
  - `Data.ts`: Central data file for component props
- `components/`: Reusable React components
- `public/`: Static assets
- `utilities/`: Utility functions and constants

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [React Slick](https://react-slick.neostack.com/) - Carousel component
- [Nodemailer](https://nodemailer.com/) - Module for email sending

## Customization

To customize the content of the landing page, modify the `Data.ts` file in the `app/` directory. This file contains the props for all major components.

To change styles, update the `tailwind.config.ts` file or modify the Tailwind classes in the component files.

## Deployment

This project is set up to be easily deployed on [Vercel](https://vercel.com/). For other hosting platforms, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT](https://choosealicense.com/licenses/mit/)
