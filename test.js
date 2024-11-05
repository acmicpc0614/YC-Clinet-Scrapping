const ObjectId = (id) => ({ id }); // Simple ObjectId function
const NumberInt = (value) => value; // Just return the number as is
const ISODate = (dateString) => new Date(dateString);

const TestData = [
  {
    _id: ObjectId("671f702988adcd3750e0acc2"),
    userId: "zUdC7alxr",
    __v: NumberInt("0"),
    accomplishments: "Maryland 30 under 30",
    age: NumberInt("32"),
    avatar:
      "https://bookface-images.s3.amazonaws.com/avatars/aa097d6d8a0fcfdd67ec2be49debf0ff926bbd49.jpg",
    cofounderPreferences: {
      requirements: [
        "I want a co-founder who is not set on a specific idea, technical, and in my country (United States).",
        "Ideally, my co-founder is already full-time working on a startup.",
      ],
      idealPersonality:
        "We are looking for someone else to help us on the technical side to help with the product. We already have technical help, but looking for more direction and guidance.",
      equity: "Open to this",
    },
    createdAt: ISODate("2024-10-28T11:06:17.13Z"),
    education: ["UMD, 2015"],
    employment: [
      "Enterprise AE at multiple companies",
      "Techstars Mentor",
      "MassChallenge Mentor",
      "UMass M2D2 Mentor",
    ],
    freeTime:
      "Adventuring to see new things, attending my different community organizations I am a part of, enjoying the small things.",
    interests: {
      shared: ["B2B / Enterprise", "Artificial Intelligence", "Healthcare"],
      personal: ["Health / Wellness"],
    },
    intro:
      "10+ in enterprise sales. Working on a healthcare AI startup that currently has revenue and funding. Looking for technical help.",
    lastSeen: "about 14 hours ago",
    lifeStory:
      "Noticing the struggles my brother went through during his cancer battle and realizing this problem had to be addressed properly.",
    linkedIn: "https://linkedin.com/in/leodassa",
    location: "Boston, MA, USA",
    name: "Leo Dassa",
    other:
      "We have revenue and traction; only thing we're missing is the right technical help.",
    startup: {
      name: "LastMinute",
      description: "AI healthcare scheduling.",
      progress: "12 months",
      funding: "Antler, $250K",
    },
    sumary:
      "I'm non-technical, already full-time working on a startup, and committed to an idea.I'm willing to do Sales and marketing and Operations.",
  },
  {
    _id: ObjectId("671f716d88adcd3750e0ad80"),
    userId: "S3fmJlD4y",
    __v: NumberInt("0"),
    accomplishments:
      "One of my most impressive accomplishments was leading a startup to generate over €100,000 in revenue within its first year.",
    age: NumberInt("37"),
    avatar:
      "https://bookface-images.s3.amazonaws.com/avatars/b82e5b6e2bd6846c8a30d9edee8b4520030ce3f2.jpg",
    cofounderPreferences: {
      requirements: [
        "Ideally, my co-founder is set on a specific idea, technical, and aligned with my interests.",
      ],
      idealPersonality:
        "Open minded person with a continuous learning approach. Empathy, psychological safety and strong values at work.",
      equity: "Equal split if profiles are in line.",
    },
    createdAt: ISODate("2024-10-28T11:11:41.497Z"),
    education: [
      "Product Heroes, Master's Degree, Product Management, 2021",
      "Università degli Studi di Firenze, Master's Degree, International Relations Master's Degree, International Relations - 2012",
    ],
    employment: [
      "Wolters Kluwer, Business Intelligence Senior Consultant, Jan 2022-Now",
      "Tripneer & MuseumTribe, Co-Founder & CPO, Apr 2021-Dec 2023",
      "Eli Lilly, People Analytics & Organization, May 2019-Jun 2021",
      "Gucci, People Data Senior Analyst, Mar 2018-May 2019",
      "Mosaicoon, HR & Organization Specialist, Mar 2017-Mar 2018",
      "Piaggio, Organization Specialist, Apr 2013-Mar 2017",
    ],
    freeTime:
      "I code a bit of Python, take pictures, read a lot to keep me updated",
    interests: {
      shared: ["Education / Edtech"],
      personal: ["Travel / Tourism", "Consumer"],
    },
    intro:
      "I am Federico Bechini, an experienced Data Analytics Expert with a strong Product management mindset and passionate about leveraging data to drive strategic decisions and business growth. Over the years, I have successfully led cross-functional teams in both startups and multinational corporations. My expertise lies in using data analytics to optimize processes, uncover growth opportunities, and inform strategic decisions, which has resulted in significant business achievements, including leading a startup to generate over €100,000 in revenue.\nBeyond my professional life, I am deeply passionate about photography, travel, music, and reading books. These interests not only enrich my personal life but also inspire my professional creativity and problem-solving skills.",
    lastSeen: "18 days ago",
    lifeStory: "",
    linkedIn: "https://www.linkedin.com/in/federicobechini/",
    location: "Florence, Metropolitan City of Florence, Italy",
    name: "Federico Bechini",
    other: "",
    startup: {
      name: "Potential Idea",
      description:
        "Applying Gen-AI and data to the travel and tourism industry.Ideally, my co-founder is set on a specific idea, technical, and aligned with my interests.",
      progress: "",
      funding: "",
    },
    sumary:
      "I'm non-technical, passively looking, and have some ideas, but I'm also open to exploring other ideas.I'm willing to do Product and Sales and marketing.",
  },
];

module.exports.TestData = TestData;
