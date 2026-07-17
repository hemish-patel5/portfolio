export const projects = [
  {
    id: "grocery",
    title: "Grocery Price Comparison System",
    description:
      "A full-stack web application that helps users search for groceries and compare prices across Woolworths, New World, and Pak'nSave.",
    details:
      "Built with React, Python, Flask, REST APIs, and Tailwind CSS, the website combines API and web-scraped product data from major New Zealand supermarkets. It provides a responsive search and comparison interface, normalises data from multiple sources, and handles timeouts or unavailable results gracefully.",
    image: new URL("../assets/grocery.png", import.meta.url).href,
    github: "https://github.com/hemish-patel5/Grocery-Price-Comparison-",
    link: "https://grocery-price-comparison-delta.vercel.app/",
  },
  {
    id: "robocar",
    title: "Wi-Fi Robot Car",
    description:
      "An ESP32-based robot car that can be controlled wirelessly through a web interface using a phone or computer.",
    details:
      "This project involved building a Wi-Fi controlled robot car using an ESP32 microcontroller, DC motors, a motor driver, and a custom web interface. The ESP32 hosts a local web server that allows users to control the car’s movement, including moving forward, reversing, turning left or right, and stopping. The project strengthened my skills in embedded programming, hardware integration, networking, and real-time device control.",
    image: new URL("../assets/robo_car.png", import.meta.url).href,
    github: "https://github.com/hemish-patel5/Wifi-Robot-Car",
    // link: "",
  },
  {
    id: "skincancer",
    title: "Interpretable Skin Cancer Detection",
    description:
      "A machine learning research project that classifies dermoscopic skin lesion images as benign or malignant using handcrafted features and an interpretable Learning Classifier System.",
    details:
      "This project investigates how handcrafted feature extraction methods can be combined with an explainable Learning Classifier System (eLCS) to classify skin lesions as benign or malignant. Features such as asymmetry, border irregularity, colour variation, texture, and lesion shape are extracted from dermoscopic images and evaluated using feature-selection and dimensionality-reduction techniques. Unlike black-box deep learning models, eLCS produces human-readable IF-THEN rules that can help explain the reasoning behind each prediction.",
    image: new URL("../assets/cancer.png", import.meta.url).href,
    github:
      "https://github.com/hemish-patel5/interpretable-skin-cancer-detection",
    // link: "",
  },
  {
    id: "iot",
    title: "IoT Smart Queue Monitoring System",
    description:
      "An IoT system that monitors room occupancy and environmental conditions to estimate queue lengths and waiting times in real time.",
    image: new URL("../assets/iot.png", import.meta.url).href,
    github: "https://github.com/hemish-patel5/Queue-Predictor-IoT",
    link: "https://queue-predictor-iot.vercel.app/",
  },
  {
    id: "trivia",
    title: "Trivia on Tap",
    description:
      "A multiplayer trivia web application where users can join live quiz sessions, answer questions, and compete against other players in real time.",
    image: new URL("../assets/trivia.png", import.meta.url).href,
    github: "https://github.com/rafaelmarcoo/trivia-on-tap",
    link: "https://trivia-on-tap.vercel.app/",
  },
];
