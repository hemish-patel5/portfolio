export const projects = [
  {
    id: "movie",
    title: "Movie Search Website",
    description:
      "This website is a simple way to look at movies. It is able to be used to search for movies as well as favourite ones that you like",
    details:
      "This website is a simple way to look at movies. It is able to be used to search for movies as well as favourite ones that you like",
    image: new URL("../assets/project-movie-website.png", import.meta.url).href,
    github: "https://github.com/hemish-patel5/Movie-Search-Website",
  },
  {
    id: "booking",
    title: "Booking System",
    description:
      "I developed a simple booking system that allows users to schedule and secure appointments in advance",
    details:
      "I developed a booking system that allows users to schedule and secure appointments in advance. On the booking page, users can enter their personal details along with the desired date and time for their booking. On the admin page, administrators can search for a booking by entering a reference number and update the booking status from 'unassigned' to 'assigned.' Additionally, if no reference number is entered, the system displays all bookings scheduled within the next two hours.",
    image: new URL("../assets/project-booking-page.png", import.meta.url).href,
    github: "https://github.com/hemish-patel5/Booking-System",
  },
  {
    id: "status",
    title: "Status Posting System",
    description:
      "I developed a simple system that enables users to create and store statuses with personal details and timestamps in a database. ",
    details:
      "I developed a system that enables users to create and store statuses with personal details and timestamps in a database. The system allows users to search for existing statuses within the database and ensures that each status is associated with a unique status code. This functionality guarantees the creation of distinct codes for different statuses, enhancing data integrity and retrieval.",
    image: new URL("../assets/project-status.png", import.meta.url).href,
    github: "https://github.com/hemish-patel5/Status-Posting-System",
  },
];
