/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Charcoal + Electric Mint Theme
        background: '#0F1115',
        surface: {
          DEFAULT: '#1A1D23',
          elevated: '#22262E',
        },
        primary: {
          DEFAULT: '#00F5A0',  // Electric Mint
          hover: '#00D88A',
          glow: 'rgba(0, 245, 160, 0.3)',
          subtle: 'rgba(0, 245, 160, 0.1)',
        },
        secondary: {
          DEFAULT: '#5B6CFF',
          hover: '#4A5AE8',
          glow: 'rgba(91, 108, 255, 0.3)',
          subtle: 'rgba(91, 108, 255, 0.1)',
        },
        text: {
          primary: '#F5F7FA',
          muted: '#8A8F98',
        },
        border: {
          DEFAULT: 'rgba(138, 143, 152, 0.2)',
          hover: 'rgba(0, 245, 160, 0.4)',
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        'spin-slow': 'spin 30s linear infinite',
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    }
  },
  plugins: [],
}

