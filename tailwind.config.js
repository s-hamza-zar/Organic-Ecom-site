module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Roboto", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      yellowtail: ["Yellowtail"],
    },
    container: {
      padding: {
        DEFAULT: "30px",
        lg: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#222222",
        secondary: "#F5E6E0",
        blue: "#274C5B",
        green: "#7EB693",
        yellow: "#EFD372",
        "gray-10": "#D4D4D4",
        "white-10": "#F9F8F8",
        "green-10": "#EFF6F1",
        "gray-80": "#525C60",
      },
      backgroundImage: {
        hero: "url('./img/hero-area-background.jpg')",
        "offer-one": "url('./img/offer-bnr-one.svg')",
        "offer-two": "url('./img/offer-bnr-two.svg')",
        aboutUs: "url('./img/aboutUs-image.png')",
        testimonial: "url('./img/testomonial-bg.png')",
        whoWeAre: "url('./img/whoWeAre-bg.png')",
        "gallery-one": "url('./img/gallery-bg-1.png')",
        "gallery-two": "url('./img/gallery-bg-2.png')",
        "gallery-three": "url('./img/gallery-bg-3.png')",
        newsLetter: "url('./img/newsletter-bg.png')",
      },
    },
  },
  plugins: [],
};
