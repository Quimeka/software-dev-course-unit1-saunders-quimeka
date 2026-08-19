//Disclaimer: Each set of Mock Data is Auto-generated. :) Working smarter, not harder. 
//Disclaimer: The code within this Mock Data is Auto-generated. I'd ideally like to use a DB and generate this dynamically. 
export let onyxUsers = [
  {
    userId: "1",
    userFirst: "Alex",
    userLast: "Smith",
    userEmail: "test@demo.com",
    userPassword: "password123"
  },
  {
    userId: "2",
    userFirst: "Taylor",
    userLast: "Jones",
    userEmail: "taylor@demo.com",
    userPassword: "password456"
  },
  {
    userId: "3",
    userFirst: "Jordan",
    userLast: "Lee",
    userEmail: "jordan@demo.com",
    userPassword: "password789"
  }
];

export const contactUsData = [];

export let idCounter = { index: 3 };

export const CREATE_USER_FIELDS = [
  { label: "First name:", name: "userFirst", type: "text" },
  { label: "Last name:", name: "userLast", type: "text" },
  { label: "Email:", name: "userEmail", type: "email" },
  { label: "Password:", name: "userPassword", type: "password" },
];

export const MOOD_OPTIONS = [
  { value: "1", moodLabel: "Very Low / Sad" },
  { value: "2", moodLabel: "Somewhat down" },
  { value: "3", moodLabel: "Neutral" },
  { value: "4", moodLabel: "Content / Happy" },
  { value: "5", moodLabel: "Highly positive / Joyful" }
];

export const DEPTH_OPTIONS = [
  { value: "1", choiceText: "Open-Ended Space", depthLabel: "I just want to write freely without any structure." },
  { value: "2", choiceText: "Structured Reflection", depthLabel: "I would prefer some specific questions to answer." },
  { value: "3", choiceText: "Not Interested", depthLabel: "I just want to track my mood for today." },
];


export const MOOD_PROMPTS = {
  "1": [
    "Where do you feel this heavy feeling in your body right now?",
    "What is one worry or task you can give yourself permission to drop today?",
    "What is something gentle you need to hear right now?",
    "What is one tiny thing you can control in this exact moment?"
  ],
  "2": [
    "What does this low energy want to say if it could speak?",
    "What is a small thing, place, or memory that makes you feel safe?",
    "Can you tell yourself that it is completely okay to not feel okay today?",
    "What is one small way you can be kind to yourself over the next hour?"
  ],
  "3": [
    "How does it feel to simply rest and exist right now without any pressure?",
    "Look around you. What are 3 ordinary things you can see right now?",
    "What is a simple task you did today, no matter how small it seems?",
    "What is one thing you want to choose to focus on for the rest of the day?"
  ],
  "4": [
    "What went well today that made you feel balanced or peaceful?",
    "Who is someone you are glad to have in your life right now?",
    "What helped you feel so steady and grounded today?",
    "How can you protect and maintain this good energy moving forward?"
  ],
  "5": [
    "What is bringing you so much joy, excitement, or bright energy right now?",
    "What is a fun idea or goal you feel inspired to jump into today?",
    "How can you use this bright energy to lift up your own day or someone else's?",
    "What is a small reminder you can write down to look back on when times get tough?"
  ]
};


// --------------------------------------------------
// MOCK ANSWERS FOR STRUCTURED REFLECTIONS
// --------------------------------------------------

const mockAnswers = {
  "1": [
    "I can feel the heaviness mostly in my shoulders and chest. I think I've been carrying a lot of tension without realizing it.",
    "I can give myself permission to stop worrying about things I cannot control tonight.",
    "I need to hear that I am doing the best I can and that I do not have to have everything figured out right now.",
    "I can control what I do with the next few minutes. I can take a breath, slow down, and decide what needs my attention."
  ],

  "2": [
    "I think the low energy is telling me that I need to slow down and stop expecting so much from myself.",
    "Being at home with a good movie, listening to music, or talking with someone I trust usually makes me feel safe.",
    "Yes. I do not have to solve everything today, and it is okay to have a difficult day.",
    "I am going to make some tea, put my phone away for a little while, and give myself some quiet time."
  ],

  "3": [
    "It feels nice to have a moment where I do not have to accomplish anything. I can just sit here and breathe.",
    "I can see my coffee mug, my laptop, and a plant sitting near the window.",
    "I cleaned the kitchen and answered a few emails. They were small things, but they needed to get done.",
    "I want to focus on finishing one thing at a time instead of worrying about everything that still needs to be done."
  ],

  "4": [
    "I had a productive morning and still had enough time to relax afterward. I did not feel like I was rushing through everything.",
    "I am especially grateful for my family and the people who check in on me when they know I have had a busy week.",
    "Taking some time away from my phone helped me feel grounded. I was able to focus on what was happening around me.",
    "I want to keep giving myself time to slow down, enjoy the good moments, and avoid filling every free moment with something else to do."
  ],

  "5": [
    "Finishing a project I have been working on has me feeling really excited. It feels good to see all the effort finally pay off.",
    "I would love to start working on a creative side project while I have this energy and motivation.",
    "I can share some of this positive energy with my friends and family by being encouraging and present with them.",
    "I want to remember that difficult periods eventually pass and that there are always good moments worth holding onto."
  ]
};


// --------------------------------------------------
// DEPTH 1 - OPEN ENDED JOURNAL ENTRIES
// Each entry is ONE paragraph.
// --------------------------------------------------

const mockOpenEndedEntries = {
  "1": [
    "Today was difficult. I felt overwhelmed for most of the day, and there were several things on my mind that made it hard to focus. I am hoping tomorrow feels a little easier.",
    "I had a rough morning and felt like everything was happening at once. I tried to slow down and remind myself that I do not have to solve every problem immediately. By tonight I feel a little more settled.",
    "Today was emotionally tiring. I spent a lot of time thinking about things that I cannot control, and I know that probably made everything feel heavier. I am going to try to be a little more patient with myself tomorrow."
  ],

  "2": [
    "I felt a little off today. Nothing particularly bad happened, but I did not have much energy. I think I need to give myself more time to rest, and hopefully tomorrow I can reset.",
    "Today was somewhat slow. I got through the things I needed to do, but I did not feel especially motivated. I am trying to remind myself that not every day needs to be productive.",
    "I felt a little down today, but there were still a few good moments. I talked with someone I care about and that helped more than I expected. Sometimes a small conversation can change the whole mood of an evening."
  ],

  "3": [
    "Today was pretty ordinary. Nothing particularly exciting happened, but I got through the things I needed to do. I am feeling pretty neutral tonight.",
    "It was a quiet day. I spent some time taking care of small things around the house and had a little time to relax. There was nothing major to report, but it was nice to have a normal day.",
    "I felt fairly balanced today. Some things went well and some things were frustrating, but overall nothing felt overwhelming. I think I am ending the day in a pretty good place."
  ],

  "4": [
    "Today felt really balanced. I got some work done and still had time to relax. I spent some time outside this evening, and it was a good reminder that I do not need every day to be exciting.",
    "I had a really nice day. I was productive without feeling rushed, and I made time to do something that I enjoy. I am grateful that I was able to find a good balance today.",
    "Things went pretty well today. I had a few moments that made me smile, and I felt comfortable with where I was throughout most of the day. I hope I can carry some of this calm energy into tomorrow."
  ],

  "5": [
    "Today was fantastic! I had a lot of energy and got several things accomplished. I spent time with people I care about and had a lot of fun. I want to remember how good today felt.",
    "I woke up feeling really motivated today and that energy stayed with me throughout the day. I accomplished something I had been putting off and it felt great to finally get it done.",
    "Today was one of those days where several little things went right. I laughed a lot, got some important things finished, and ended the evening feeling genuinely grateful. I want to remember this feeling."
  ]
};


// --------------------------------------------------
// HELPER FUNCTIONS
// --------------------------------------------------

const formatMockDate = (date) => {
  return date.toISOString().substring(0, 10);
};


// Create a depth 2 entry using the ACTUAL
// questions from MOOD_PROMPTS.
//
// Result:
// [question, answer, question, answer, ...]
const createStructuredEntry = (mood) => {

  const prompts = MOOD_PROMPTS[mood];
  const answers = mockAnswers[mood];

  const entry = [];

  prompts.forEach((prompt, index) => {
    entry.push(prompt);
    entry.push(answers[index]);
  });

  return entry;
};


// Create a depth 1 entry.
// One complete paragraph inside the array.
const createOpenEndedEntry = (mood, entryNumber = 0) => {

  const entries = mockOpenEndedEntries[mood];

  return [
    entries[entryNumber % entries.length]
  ];
};


// Create a depth 3 entry.
// Depth 3 is mood tracking only.
const createMoodOnlyEntry = () => {
  return [];
};


// --------------------------------------------------
// LOGGED JOURNAL ENTRIES
// --------------------------------------------------

export const loggedJournalEntries = [];


// July 1, 2026
const startDate = new Date("2026-07-01T12:00:00");

// August 19, 2026
const endDate = new Date("2026-08-19T12:00:00");


// Keep track of journal entry numbers for each user.
const journalEntryNumbers = {
  "1": 0,
  "2": 0,
  "3": 0
};


let currentDate = new Date(startDate);


while (currentDate <= endDate) {

  const dateString = formatMockDate(currentDate);


  // Create an entry for each user.
  onyxUsers.forEach((user, userIndex) => {

    const userId = user.userId;

    journalEntryNumbers[userId]++;


    // Create different moods throughout the date range.
    const mood = String(
      ((currentDate.getDate() + userIndex * 2) % 5) + 1
    );


    // Rotate through the three depth options.
    const depth = String(
      ((currentDate.getDate() + userIndex) % 3) + 1
    );


    let entry;


    // ----------------------------------------------
    // DEPTH 1
    // Open-ended paragraph
    // ----------------------------------------------

    if (depth === "1") {

      entry = createOpenEndedEntry(
        mood,
        currentDate.getDate() + userIndex
      );

    }


    // ----------------------------------------------
    // DEPTH 2
    // Structured questions + answers
    // ----------------------------------------------

    else if (depth === "2") {

      entry = createStructuredEntry(mood);

    }


    // ----------------------------------------------
    // DEPTH 3
    // Mood tracking only
    // ----------------------------------------------

    else {

      entry = createMoodOnlyEntry();

    }


    loggedJournalEntries.push({
      userId: userId,
      journalEntryNumber: journalEntryNumbers[userId],
      date: dateString,
      mood: mood,
      depth: depth,
      entry: entry
    });


    // ------------------------------------------------
    // OCCASIONAL SECOND ENTRY
    //
    // This intentionally creates multiple entries
    // for Alex on the same date.
    //
    // Useful for testing findLast().
    // ------------------------------------------------

    if (
      currentDate.getDate() % 7 === 0 &&
      userIndex === 0
    ) {

      journalEntryNumbers[userId]++;


      const secondMood = String(
        (parseInt(mood) % 5) + 1
      );


      loggedJournalEntries.push({
        userId: userId,
        journalEntryNumber: journalEntryNumbers[userId],
        date: dateString,
        mood: secondMood,
        depth: "1",
        entry: createOpenEndedEntry(
          secondMood,
          currentDate.getDate() + 1
        )
      });

    }

  });


  // Move to the next day.
  currentDate.setDate(
    currentDate.getDate() + 1
  );

}