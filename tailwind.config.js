/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        background: '#050505', // Deep luxurious black
        surface: {
          DEFAULT: '#0F0F0F',
          hover: '#1A1A1A',
          active: '#242424',
        },
        primary: {
          DEFAULT: '#FFFFFF', // Pure white for maximum contrast
          muted: '#A1A1AA', // Zinc-400
        },
        accent: {
          DEFAULT: '#3B82F6', // Subtle tech blue (can be changed to silver/gold)
          glow: 'rgba(59, 130, 246, 0.5)',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'subtle-glow': 'radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 70%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    }
  },
  plugins: [],
}

