// Timeline posts keyed by OrgId.
// Matches what TimelineListItem.js expects: { Timestamp, ContentData, ContentType, OrgId, UserId }
// Timestamp is milliseconds since epoch (new Date(Timestamp) must produce a valid date).
// ContentType is "text" or "url" (react-player handles audio/video URLs).
// ContentData for text may contain "+" in place of spaces (frontend strips them).

const now = Date.now();
const mins = (n) => n * 60 * 1000;

const posts = {
  "4497": [
    {
      Timestamp: now - mins(120),
      OrgId: "4497",
      UserId: "maria.ivanova",
      ContentType: "text",
      ContentData: "We just completed our first 5K run fundraiser in Sofia! Over 200 participants joined us this morning."
    },
    {
      Timestamp: now - mins(95),
      OrgId: "4497",
      UserId: "maria.ivanova",
      ContentType: "text",
      ContentData: "The weather was perfect and the energy was incredible. Thank you to all our volunteers!"
    },
    {
      Timestamp: now - mins(80),
      OrgId: "4497",
      UserId: "georgi.petrov",
      ContentType: "text",
      ContentData: "Posting some photos from today's event now. Check back soon!"
    },
    {
      Timestamp: now - mins(60),
      OrgId: "4497",
      UserId: "georgi.petrov",
      ContentType: "url",
      ContentData: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      Timestamp: now - mins(30),
      OrgId: "4497",
      UserId: "nina.koleva",
      ContentType: "text",
      ContentData: "We raised 12,400 BGN today — exceeding our goal by 24%. Every lev goes directly to youth athletics programs."
    },
    {
      Timestamp: now - mins(10),
      OrgId: "4497",
      UserId: "nina.koleva",
      ContentType: "text",
      ContentData: "Next event is scheduled for March. Sign up at our website to get early access."
    }
  ],

  "372": [
    {
      Timestamp: now - mins(200),
      OrgId: "372",
      UserId: "fatima.haidari",
      ContentType: "text",
      ContentData: "New literacy class started today in Herat with 34 women enrolled — our largest cohort yet."
    },
    {
      Timestamp: now - mins(170),
      OrgId: "372",
      UserId: "fatima.haidari",
      ContentType: "text",
      ContentData: "These women are learning to read and write for the first time. The courage and determination in that room is humbling."
    },
    {
      Timestamp: now - mins(140),
      OrgId: "372",
      UserId: "zarghona.ahmadi",
      ContentType: "text",
      ContentData: "Health education session completed this afternoon. Topics covered: maternal nutrition, childhood vaccines, and hygiene."
    },
    {
      Timestamp: now - mins(90),
      OrgId: "372",
      UserId: "zarghona.ahmadi",
      ContentType: "url",
      ContentData: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      Timestamp: now - mins(45),
      OrgId: "372",
      UserId: "laila.mohammadi",
      ContentType: "text",
      ContentData: "Received a new shipment of textbooks and supplies from our donors in Germany. Distribution starts tomorrow."
    }
  ],

  "1001": [
    {
      Timestamp: now - mins(300),
      OrgId: "1001",
      UserId: "james.oduya",
      ContentType: "text",
      ContentData: "Well installation complete in Nyamira County, Kenya. 1,200 residents now have access to clean drinking water."
    },
    {
      Timestamp: now - mins(240),
      OrgId: "1001",
      UserId: "james.oduya",
      ContentType: "text",
      ContentData: "Water quality tests passed on all four metrics. The borehole is producing 3,000 liters per hour."
    },
    {
      Timestamp: now - mins(180),
      OrgId: "1001",
      UserId: "aisha.mwangi",
      ContentType: "url",
      ContentData: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      Timestamp: now - mins(120),
      OrgId: "1001",
      UserId: "aisha.mwangi",
      ContentType: "text",
      ContentData: "Local maintenance committee trained and ready to manage the pump. Sustainability is built into every project we do."
    },
    {
      Timestamp: now - mins(50),
      OrgId: "1001",
      UserId: "james.oduya",
      ContentType: "text",
      ContentData: "Next installation is planned for Kisumu in six weeks. Funding secured — now finalizing site surveys."
    }
  ],

  "2048": [
    {
      Timestamp: now - mins(400),
      OrgId: "2048",
      UserId: "elena.cortez",
      ContentType: "text",
      ContentData: "Patrol teams documented zero illegal logging incidents in sector 7 this month — a record for the region."
    },
    {
      Timestamp: now - mins(350),
      OrgId: "2048",
      UserId: "elena.cortez",
      ContentType: "text",
      ContentData: "Camera traps captured footage of a jaguar family. Population appears stable in the protected corridor."
    },
    {
      Timestamp: now - mins(280),
      OrgId: "2048",
      UserId: "pedro.alves",
      ContentType: "url",
      ContentData: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      Timestamp: now - mins(200),
      OrgId: "2048",
      UserId: "pedro.alves",
      ContentType: "text",
      ContentData: "Community reforestation day: 800 native saplings planted by 60 local volunteers. Great turnout."
    },
    {
      Timestamp: now - mins(100),
      OrgId: "2048",
      UserId: "elena.cortez",
      ContentType: "text",
      ContentData: "New partnership signed with three indigenous communities for co-managed conservation zones."
    }
  ],

  "3300": [
    {
      Timestamp: now - mins(500),
      OrgId: "3300",
      UserId: "kwame.asante",
      ContentType: "text",
      ContentData: "School term opened with 450 students in Kumasi — up 18% from last year. New classrooms made a real difference."
    },
    {
      Timestamp: now - mins(420),
      OrgId: "3300",
      UserId: "kwame.asante",
      ContentType: "text",
      ContentData: "Teacher training workshop wrapped up. 22 educators completed our new STEM curriculum certification."
    },
    {
      Timestamp: now - mins(360),
      OrgId: "3300",
      UserId: "abena.mensah",
      ContentType: "url",
      ContentData: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      Timestamp: now - mins(300),
      OrgId: "3300",
      UserId: "abena.mensah",
      ContentType: "text",
      ContentData: "Scholarship recipients for the year announced. 15 girls from rural villages will attend secondary school with full support."
    },
    {
      Timestamp: now - mins(150),
      OrgId: "3300",
      UserId: "kwame.asante",
      ContentType: "text",
      ContentData: "Lunch program now serving 380 students daily. Attendance is up 12% since we started — hunger was a real barrier."
    },
    {
      Timestamp: now - mins(30),
      OrgId: "3300",
      UserId: "abena.mensah",
      ContentType: "text",
      ContentData: "End of term exams next week. Tutoring sessions running every evening this week for students who need extra support."
    }
  ]
};

module.exports = posts;
