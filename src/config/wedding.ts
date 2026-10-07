export const weddingConfig = {
  couple: {
    groomName: "Akshit",
    brideName: "Aarushi",
    groomFullName: "Akshit Mittal",
    brideFullName: "Aarushi Mittal",
    groomParents: "Vandana & Pankaj Mittal",
    brideParents: "Sonali & Romit Mittal",
  },
  weddingDateTime: "2026-11-25T19:00:00+05:30", 
  timezone: "Asia/Kolkata",
  venue: {
    name: "Anandam Resort",
    address: "Jagadhri, Haryana",
    mapsUrl: "https://www.google.com/maps/place/ANANDAM+RESORT/data=!4m2!3m1!1s0x0:0x731cd4cb29a1b533?sa=X&ved=1t:2428&ictx=111",
  },
  events: [
    {
      id: "haldi-mehndi",
      name: "Haldi & Mehndi",
      date: "Nov 23, 2026",
      time: "3:00 PM",
      venue: "Shibu Makhan Dharmshala",
      address: "Shibu Makhan Dharmshala",
      description: "Join us for a morning of colors, henna, and music as we kick off the celebrations.",
      dressCode: "Yellow / Green Traditional",
      mapsUrl: "https://maps.google.com/?q=Shibu+Makhan+Dharmshala",
    },
    {
      id: "Mandha",
      name: "Mandha",
      date: "Nov 24, 2026",
      time: "12:00 PM",
      venue: "Shibu Makhan Dharmshala",
      address: "Shibu Makhan Dharmshala",
      description: "Join us for a morning of colors, henna, and music as we kick off the celebrations.",
      dressCode: "Yellow / Green Traditional",
      mapsUrl: "https://maps.google.com/?q=Shibu+Makhan+Dharmshala",
    },
    {
      id: "sangeet",
      name: "Sangeet Ceremony",
      date: "Nov 24, 2026",
      time: "8:00 PM",
      venue: "Shibu Makhan Dharmshala",
      address: "Shibu Makhan Dharmshala",
      description: "An evening of dance, performances, and celebration. Bring your dancing shoes!",
      dressCode: "Indo-Western / Glamorous",
      mapsUrl: "https://maps.google.com/?q=Shibu+Makhan+Dharmshala",
    },
  
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
    brideFamily: { heading: "Bride's Family", members: ["Mr. & Mrs. Mittal", "Romit Mittal", "Sonali Mittal"] },
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
