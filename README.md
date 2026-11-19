# Learnify

A responsive landing page for a fictional e-learning platform, built using React and Tailwind CSS.

## Features

- **Responsive Navigation:** Fixed navigation bar with a mobile menu.
- **Hero Section:** Introduction to the platform with call-to-action buttons and collaborator logos.
- **Course Catalog:** Displays courses with thumbnails, ratings, duration, and pricing.
- **Course Pagination:** Show more or fewer courses using an interactive toggle.
- **Pricing Plans:** Displays Personal, Professional, and Enterprise subscription tiers.
- **Testimonials:** Showcases learner testimonials.
- **Scroll to Top:** Floating button for smooth navigation to the top of the page.

## Technologies Used

- React
- JavaScript
- Tailwind CSS

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/charankumaregd/learnify.git
   cd learnify
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open `http://localhost:3000` in your browser.

## Project Structure

```text
learnify/
├── public/
│   ├── assets/
│   │   ├── courses/
│   │   ├── testimonials/
│   │   └── hero-image.svg
│   └── index.html
├── src/
│   ├── components/
│   ├── constants/
│   ├── sections/
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── package.json
├── package-lock.json
├── tailwind.config.js
└── README.md
```

## Implementation Notes

- The page is a frontend prototype with no backend integration.
- Course listings, pricing plans, and testimonials use locally defined data.
- Navigation links use section anchors.
- Login, signup, and subscription actions are interface elements without authentication or payment functionality.