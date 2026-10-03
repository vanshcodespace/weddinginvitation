export const weddingConfig = {
  couple: {
    groomName: "Akshit",
    brideName: "Aarushi",
    groomFullName: "Akshit Mittal",
    brideFullName: "Aarushi Mittal",
    groomParents: "Vandana & Pankaj Mittal",
    brideParents: "Saloni & Romit Mittal",
  },
  weddingDateTime: "2026-11-25T19:00:00+05:30", 
  timezone: "Asia/Kolkata",
  venue: {
    name: "Anandam Resort",
    address: "Anandam Resort",
    mapsUrl: "https://www.google.com/maps/place/ANANDAM+RESORT/data=!4m2!3m1!1s0x0:0x731cd4cb29a1b533?sa=X&ved=1t:2428&ictx=111",
  },
  events: [
    {
      id: "haldi-mehndi",
      name: "Haldi & Mehndi",
      date: "Nov 23, 2026",
      time: "10:00 AM",
      venue: "Shibu Makhan Dharamshala",
      address: "Shibu Makhan Dharamshala",
      description: "Join us for a morning of colors, henna, and music as we kick off the celebrations.",
      dressCode: "Yellow / Green Traditional",
      mapsUrl: "https://maps.google.com/?q=Shibu+Makhan+Dharamshala",
    },
    {
      id: "sangeet",
      name: "Sangeet Night",
      date: "Nov 24, 2026",
      time: "7:00 PM",
      venue: "Shibu Makhan Dharamshala",
      address: "Shibu Makhan Dharamshala",
      description: "An evening of dance, performances, and celebration. Bring your dancing shoes!",
      dressCode: "Indo-Western / Glamorous",
      mapsUrl: "https://maps.google.com/?q=Shibu+Makhan+Dharamshala",
    },
    {
      id: "wedding",
      name: "Wedding Ceremony",
      date: "Nov 25, 2026",
      time: "7:00 PM",
      venue: "Anandam Resort",
      address: "Anandam Resort",
      description: "The main event where we tie the knot. Dinner and reception to follow.",
      dressCode: "Traditional Indian",
      mapsUrl: "https://www.google.com/maps/place/ANANDAM+RESORT/data=!4m2!3m1!1s0x0:0x731cd4cb29a1b533?sa=X&ved=1t:2428&ictx=111",
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
