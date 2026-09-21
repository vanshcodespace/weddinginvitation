export const weddingConfig = {
  couple: {
    groomName: "Akshit",
    brideName: "Aarushi",
    groomFullName: "Akshit Mittal",
    brideFullName: "Aarushi Mittal",
    groomParents: "Mr. & Mrs. Mittal",
    brideParents: "Mr. & Mrs. Mittal",
  },
  weddingDateTime: "2027-02-14T18:00:00+05:30", // null until confirmed
  timezone: "Asia/Kolkata",
  venue: {
    name: "The Grand Palace",
    address: "123 Royal Avenue, Udaipur, Rajasthan, India",
    mapsUrl: "https://maps.google.com/?q=Udaipur+Rajasthan",
  },
  events: [
    {
      id: "haldi",
      name: "Haldi & Mehndi",
      date: "Feb 13, 2027",
      time: "10:00 AM",
      venue: "The Grand Palace Gardens",
      address: "123 Royal Avenue, Udaipur",
      description: "Join us for a morning of colors, henna, and music as we kick off the celebrations.",
      dressCode: "Yellow / Green Traditional",
      mapsUrl: "https://maps.google.com/?q=Udaipur+Rajasthan",
    },
    {
      id: "sangeet",
      name: "Sangeet Night",
      date: "Feb 13, 2027",
      time: "7:00 PM",
      venue: "The Grand Palace Ballroom",
      address: "123 Royal Avenue, Udaipur",
      description: "An evening of dance, performances, and celebration. Bring your dancing shoes!",
      dressCode: "Indo-Western / Glamorous",
      mapsUrl: "https://maps.google.com/?q=Udaipur+Rajasthan",
    },
    {
      id: "wedding",
      name: "Wedding Ceremony",
      date: "Feb 14, 2027",
      time: "6:00 PM",
      venue: "The Grand Palace Courtyard",
      address: "123 Royal Avenue, Udaipur",
      description: "The main event where we tie the knot. Dinner and reception to follow.",
      dressCode: "Traditional Indian",
      mapsUrl: "https://maps.google.com/?q=Udaipur+Rajasthan",
    }
  ],
  ourStory: {
    enabled: true,
    milestones: [
      { title: "First Meeting", date: "June 2023", description: "Met through a mutual friend at a coffee shop." },
      { title: "First Date", date: "August 2023", description: "A magical evening walking by the lake." },
      { title: "The Proposal", date: "December 2025", description: "He got down on one knee under the stars." },
      { title: "Forever Begins", date: "Feb 14, 2027", description: "We can't wait to celebrate with you all!" }
    ],
  },
  family: {
    enabled: true,
    groomFamily: { heading: "Groom's Family", members: ["Mr. & Mrs. Mittal", "Pankaj Mittal", " Mittal"] },
    brideFamily: { heading: "Bride's Family", members: ["Mr. & Mrs. Mittal", "Mr", "Mrs"] },
  },
  gallery: {
    images: [
      { src: "/images/gallery/photo-1.jpg", alt: "Couple together", category: "couple" },
      { src: "/images/gallery/photo-2.jpg", alt: "Engagement ring", category: "engagement" },
      { src: "/images/gallery/photo-3.jpg", alt: "Pre-wedding shoot", category: "pre-wedding" }
    ],
  },
  music: {
    src: "/music/wedding-song.mp3",
    enabled: true,
  },
  rsvp: {
    endpoint: "/api/rsvp",
  },
  guestbook: {
    endpoint: "/api/wishes",
  },
} as const;
