/** @type {import('tailwindcss').Config} */
module.exports = {
  // Enabling dark mode with a specific selector
  darkMode: "selector",

  // Specifying content files for Tailwind to scan for class usage
  content: ["./dist/*.{html,js}"],

  theme: {
    extend: {
      fontFamily: ["Inter", "sans-serif"], // Extending font family with 'Inter'

      // Defining color palette for the project
      colors: {
        primary: {
          limeGreen: "hsl(163, 72%, 41%)", // Used for success or positive states
          brightRed: "hsl(356, 69%, 56%)", // Used for error or alert messages
          facebook: "hsl(208, 92%, 53%)", // Facebook brand color
          twitter: "hsl(203, 89%, 53%)", // Twitter brand color
          instagram: "linear-gradient(hsl(37, 97%, 70%), hsl(329, 70%, 58%))", // Instagram gradient brand color
          youtube: "hsl(348, 97%, 39%)", // YouTube brand color
        },

        // Toggle colors for light and dark themes
        toggle: {
          darkTheme: "linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))", // Gradient for dark mode toggle
          lightTheme: "hsl(230, 22%, 74%)", // Color for light mode toggle
        },

        // Dark theme color palette
        dark: {
          bg: "hsl(230, 17%, 14%)", // Background color for dark theme
          topBg: "hsl(232, 19%, 15%)", // Top background pattern in dark theme
          cardBg: "hsl(228, 28%, 20%)", // Card background color for dark theme
          blueText: "hsl(228, 34%, 66%)", // Desaturated blue for text in dark mode
          text: "hsl(0, 0%, 100%)", // White text for dark theme
        },

        // Light theme color palette
        light: {
          bg: "hsl(0, 0%, 100%)", // White background color for light theme
          topBg: "hsl(225, 100%, 98%)", // Very pale blue for top background pattern in light mode
          cardBg: "hsl(227, 47%, 96%)", // Light grayish-blue background for cards in light theme
          text: "hsl(230, 17%, 14%)", // Very dark blue text for headings in light mode
          greyishText: "hsl(228, 12%, 44%)", // Dark grayish-blue text for body content in light mode
        },
      },
    },
  },

  // No additional plugins specified
  plugins: [],
};
