/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Apple-style system font stack
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "San Francisco",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "sans-serif"
        ],
        display: [
          "SF Pro Display",
          "-apple-system",
          "BlinkMacSystemFont",
          "San Francisco",
          "Helvetica Neue",
          "sans-serif"
        ],
      },
      colors: {
        background: '#030303', // Deepest black
        surface: {
          DEFAULT: '#121212',
          hover: '#1E1E1E',
          active: '#2A2A2A',
        },
        primary: {
          DEFAULT: '#FFFFFF',
          muted: '#86868B', // Apple-style gray
          dim: '#424245',
        },
        accent: {
          DEFAULT: '#2997FF', // Apple blue
          glow: 'rgba(41, 151, 255, 0.5)',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'subtle-glow': 'radial-gradient(circle at center, rgba(255,255,255,0.04) 0%, transparent 60%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      letterSpacing: {
        tightest: '-0.02em',
        tighter: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
      }
    }
  },
  plugins: [],
}

