/** @type {import('tailwindcss').Config} */

module.exports = {
  // content: ["./src/**/*.{html,js}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  options: {
    safelist: [
      "bg-black",
      "bg-red-200",
      "bg-red-300",
      "bg-red-400",
      "bg-red-500",
      "bg-red-600",
      "bg-red-700",
      "bg-red-800",
      "opacity-10",
      "o-20",
      "o-30",
      "o-40",
      "o-50",
      "rounded-b-full",
      "rounded-t-full",
      "col-span-1",
      "col-span-2",
      "col-span-3",
      "z-0",
      "z-10",
      "z-20",
      "z-30",
      "z-40",
      "md:col-span-1",
      "md:col-span-2",
      "md:col-span-3",
      "lg:col-span-1",
      "lg:col-span-2",
      "lg:col-span-3",
    ],
  },
  darkMode: false,
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      20: "20px",
    },
    extend: {
      transitionDuration: {
        2000: "2000ms",
      },
      transitionDelay: {
        1500: "1500ms",
      },
      height: {
        200: "35rem",
        "full1.5": "150%",
        full2: "200%",
        "full2.5": "250%",
        full3: "300%",
      },
      width: {
        "full1.1": "110%",
        "full1.5": "150%",
        full2: "200%",
        "full2.5": "250%",
      },
      margin: {
        "-140p": "-14px",
        100: "25rem",
        120: "27.5rem",
        130: "30rem",
        0.25: "0.062rem",
        0.2: "0.02rem",
      },
      scale: {
        200: "2",
        250: "2.5",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  variants: {
    width: ["responsive", "hover", "focus"],
    height: ["responsive", "hover", "focus"],
    extend: {
      borderWidth: ["hover", "focus"],
      margin: ["hover"],
    },
  },
  plugins: [],
}

