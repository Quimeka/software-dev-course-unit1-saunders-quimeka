//Disclaimer: Each set of Mock Data is Auto-generated. :) Working smarter, not harder. 
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

export const userMoods = [
  { userId: "1", mood: "5", date: "2026-08-01" },
  { userId: "1", mood: "4", date: "2026-08-03" },
  { userId: "1", mood: "3", date: "2026-08-05" },
  { userId: "1", mood: "2", date: "2026-08-08" },
  { userId: "1", mood: "2", date: "2026-08-10" },
  { userId: "1", mood: "4", date: "2026-08-12" },
  { userId: "1", mood: "5", date: "2026-08-15" },
  { userId: "1", mood: "3", date: "2026-08-18" },
  { userId: "1", mood: "1", date: "2026-08-20" },
  { userId: "1", mood: "5", date: "2026-08-24" },
  { userId: "1", mood: "4", date: "2026-08-27" },
  { userId: "1", mood: "3", date: "2026-08-30" },
  { userId: "2", mood: "2", date: "2026-08-01" },
  { userId: "2", mood: "2", date: "2026-08-04" },
  { userId: "2", mood: "3", date: "2026-08-06" },
  { userId: "2", mood: "5", date: "2026-08-09" },
  { userId: "2", mood: "4", date: "2026-08-11" },
  { userId: "2", mood: "5", date: "2026-08-14" },
  { userId: "2", mood: "2", date: "2026-08-17" },
  { userId: "2", mood: "5", date: "2026-08-19" },
  { userId: "2", mood: "3", date: "2026-08-22" },
  { userId: "2", mood: "2", date: "2026-08-25" },
  { userId: "2", mood: "4", date: "2026-08-28" },
  { userId: "2", mood: "5", date: "2026-08-31" },
  { userId: "3", mood: "3", date: "2026-08-02" },
  { userId: "3", mood: "4", date: "2026-08-05" },
  { userId: "3", mood: "1", date: "2026-08-07" },
  { userId: "3", mood: "2", date: "2026-08-10" },
  { userId: "3", mood: "5", date: "2026-08-12" },
  { userId: "3", mood: "5", date: "2026-08-15" },
  { userId: "3", mood: "3", date: "2026-08-17" },
  { userId: "3", mood: "1", date: "2026-08-20" },
  { userId: "3", mood: "2", date: "2026-08-23" },
  { userId: "3", mood: "4", date: "2026-08-26" },
  { userId: "3", mood: "5", date: "2026-08-29" },
  { userId: "3", mood: "3", date: "2026-08-31" }
];

export const userDepths = [
  { userId: "1", depth: "1", date: "2026-08-01" },
  { userId: "1", depth: "2", date: "2026-08-03" },
  { userId: "1", depth: "2", date: "2026-08-05" },
  { userId: "1", depth: "1", date: "2026-08-08" },
  { userId: "1", depth: "1", date: "2026-08-10" },
  { userId: "1", depth: "2", date: "2026-08-12" },
  { userId: "1", depth: "2", date: "2026-08-15" },
  { userId: "1", depth: "1", date: "2026-08-18" },
  { userId: "1", depth: "1", date: "2026-08-20" },
  { userId: "1", depth: "2", date: "2026-08-24" },
  { userId: "1", depth: "2", date: "2026-08-27" },
  { userId: "1", depth: "1", date: "2026-08-30" },
  { userId: "2", depth: "1", date: "2026-08-01" },
  { userId: "2", depth: "1", date: "2026-08-04" },
  { userId: "2", depth: "2", date: "2026-08-06" },
  { userId: "2", depth: "2", date: "2026-08-09" },
  { userId: "2", depth: "1", date: "2026-08-11" },
  { userId: "2", depth: "2", date: "2026-08-14" },
  { userId: "2", depth: "1", date: "2026-08-17" },
  { userId: "2", depth: "2", date: "2026-08-19" },
  { userId: "2", depth: "1", date: "2026-08-22" },
  { userId: "2", depth: "1", date: "2026-08-25" },
  { userId: "2", depth: "2", date: "2026-08-28" },
  { userId: "2", depth: "2", date: "2026-08-31" },
  { userId: "3", depth: "1", date: "2026-08-02" },
  { userId: "3", depth: "2", date: "2026-08-05" },
  { userId: "3", depth: "1", date: "2026-08-07" },
  { userId: "3", depth: "1", date: "2026-08-10" },
  { userId: "3", depth: "2", date: "2026-08-12" },
  { userId: "3", depth: "2", date: "2026-08-15" },
  { userId: "3", depth: "1", date: "2026-08-17" },
  { userId: "3", depth: "1", date: "2026-08-20" },
  { userId: "3", depth: "1", date: "2026-08-23" },
  { userId: "3", depth: "2", date: "2026-08-26" },
  { userId: "3", depth: "2", date: "2026-08-29" },
  { userId: "3", depth: "1", date: "2026-08-31" }
];

export const userJournalEntries = [
  { userId: "1", date: "2026-08-01", journalEntry: "\nRough shift on my feet all day at the register. Some guy screamed at me over a expired coupon, but my team lead let me take a extra ten minute break to clear my head." },
  { userId: "1", date: "2026-08-03", journalEntry: "What went well today that made you feel balanced or peaceful?\nI didn't let myself get sucked into drama in the breakroom. Did my tasks, kept my head down, and had a smooth shift.\nWho is someone you are glad to have in your life right now?\nMarcus, the morning stocker. He saw my checkout line getting slammed and immediately opened another lane without me even asking.\nWhat helped you feel so steady and grounded today?\nSitting in my car completely in silence for twenty minutes during my scheduled lunch break.\nHow can you protect and maintain this good energy moving forward?\nBy leaving work at the store. Once I clock out, I am completely done thinking about retail." },
  { userId: "1", date: "2026-08-05", journalEntry: "How does it feel to simply rest and exist right now without any pressure?\nIt feels strange. My body is still aching from standing on that hard linoleum floor all week, but it is nice to sit.\nLook around you. What are 3 ordinary things you can see right now?\nMy worn-out work sneakers by the door, a half-empty water bottle, and a grocery receipt roll.\nWhat is a simple task you did today, no matter how small it seems?\nFinally put all my clean laundry away instead of letting it live in the plastic basket.\nWhat is one thing you want to choose to focus on for the rest of the day?\nPutting some ice on my sore heels and staying far away from anything customer-facing." },
  { userId: "1", date: "2026-08-08", journalEntry: "\nWoke up with zero energy. Dragging my feet through checking out groceries today, but just trying to be polite and get through the schedule." },
  { userId: "1", date: "2026-08-10", journalEntry: "\nJust feeling incredibly flat and uninspired. Counting down the minutes until my shift ends so I can go home and crawl into bed." },
  { userId: "1", date: "2026-08-12", journalEntry: "What went well today that made you feel balanced or peaceful?\nGot through the afternoon rush without any major registers jamming or angry managers over our shoulders.\nWho is someone you are glad to have in your life right now?\nOur regular customer, Mrs. Higgins. She always comes through my lane and asks how my week is going with genuine kindness.\nWhat helped you feel so steady and grounded today?\nTaking a long walk around the block outside during my fifteen-minute afternoon break to see actual sunlight.\nHow can you protect and maintain this good energy moving forward?\nKeep a clean station. A messy checkout counter makes the whole day feel twice as chaotic." },
  { userId: "1", date: "2026-08-15", journalEntry: "What is bringing you so much joy, excitement, or bright energy right now?\nMy manager told me my till was completely perfect all week and approved my weekend schedule request!\nWhat is a fun idea or goal you feel inspired to jump into today?\nPlanning out a small weekend road trip with friends since I finally have two consecutive days off work.\nHow can you use this bright energy to lift up your own day or someone else's?\nBeing extra patient with the new hire who is still struggling to find the produce codes on the touchscreen.\nWhat is a small reminder you can write down to look back on when times get tough?\nIt is just a job. Don't let a stressful customer ruin your internal peace." },
  { userId: "1", date: "2026-08-18", journalEntry: "\nJust a totally normal, quiet Tuesday at the store. Nothing crazy happened, and the hours actually went by pretty fast." },
  { userId: "1", date: "2026-08-20", journalEntry: "\nCompletely hit a wall. Brain is fried from holiday weekend prep crowds, and I need to ignore my phone for the rest of the night." },
  { userId: "1", date: "2026-08-24", journalEntry: "What is bringing you so much joy, excitement, or bright energy right now?\nThe inventory count matched perfectly on the first try, so we got to go home early!\nWhat is a fun idea or goal you feel inspired to jump into today?\nCooking a nice, actual homemade dinner tonight instead of just eating takeout in my uniform.\nHow can you use this bright energy to lift up your own day or someone else's?\nCovering a quick thirty-minute register slot for a coworker so they can run out and catch their bus.\nWhat is a small reminder you can write down to look back on when times get tough?\nBad days always end at closing time. You just have to make it to the final clock-out." },
  { userId: "1", date: "2026-08-27", journalEntry: "What went well today that made you feel balanced or peaceful?\nGot through sorting all the backstock inventory sheets without losing my place or having to re-count boxes.\nWho is someone you are glad to have in your life right now?\nThe evening closing crew. They work fast and don't complain, which makes getting out of here on time so much easier.\nWhat helped you feel so steady and grounded today?\nDrinking a full bottle of water between customer rushes instead of chugging energy drinks all day.\nHow can you protect and maintain this good energy moving forward?\nBy pacing myself during stocking periods so I don't throw my back out before the week is done." },
  { userId: "1", date: "2026-08-30", journalEntry: "\nHad a nice, relaxed rhythm on the register today. Conversed with some pleasant locals and the shift flew by." },
  { userId: "2", date: "2026-08-01", journalEntry: "\nFeeling completely stuck messing with CSS layout tweaks. Moving at a snail's pace but trying to stay patient." },
  { userId: "2", date: "2026-08-04", journalEntry: "\nCould not focus to save my life today. Gave up on the hard logic and just knocked out some mindless admin work instead." },
  { userId: "2", date: "2026-08-06", journalEntry: "How does it feel to simply rest and exist right now without any pressure?\nIt feels a bit stressful because I feel like I'm falling behind, but my body is literally forcing me to stop.\nLook around you. What are 3 ordinary things you can see right now?\nMy giant Hydro Flask, a desk lamp with a dying bulb, and a messy pile of notebooks.\nWhat is a simple task you did today, no matter how small it seems?\nCleaned up my messy project sidebar and deleted all those old, unused component files.\nWhat is one thing you want to choose to focus on for the rest of the day?\nShutting down the computer before it gets pitch black outside." },
  { userId: "2", date: "2026-08-09", journalEntry: "What is bringing you so much joy, excitement, or bright energy right now?\nThe client actually loved the dashboard design mockups! No major revisions requested!\nWhat is a fun idea or goal you feel inspired to jump into today?\nPlaying around with some cool charting libraries to make the data visualization pop.\nHow can you use this bright energy to lift up your own day or someone else's?\nSending a huge thank-you note to the UI designer who helped me brainstorm the layouts.\nWhat is a small reminder you can write down to look back on when times get tough?\nYou don't have to build Rome in a day. Small progress is still progress." },
  { userId: "2", date: "2026-08-11", journalEntry: "\nHad a great coding session this morning. Cleaned up a ton of messy CSS modules and everything looks so much better." },
  { userId: "2", date: "2026-08-14", journalEntry: "What is bringing you so much joy, excitement, or bright energy right now?\nFinally got the responsive mobile layout to play nice. No more overlapping text!\nWhat is a fun idea or goal you feel inspired to jump into today?\nWriting some thorough integration tests so I don't accidentally break this layout later.\nHow can you use this bright energy to lift up your own day or someone else's?\nLeave clean comments in the code so the incoming junior devs don't get totally confused.\nWhat is a small reminder you can write down to look back on when times get tough?\nWhen you hit a brick wall, just walk away for 10 minutes. The solution usually hits you then." },
  { userId: "2", date: "2026-08-17", journalEntry: "\nBrain is running on 10% battery. Kept my head down and only touched simple code maintenance so I didn't break anything." },
  { userId: "2", date: "2026-08-19", journalEntry: "What is bringing you so much joy, excitement, or bright energy right now?\nGot the data mapping pipeline working seamlessly without a single error message throw!\nWhat is a fun idea or goal you feel inspired to jump into today?\nBuilding out a toggle for dark mode because it's fun and my eyes hurt.\nHow can you use this bright energy to lift up your own day or someone else's?\nRun a fast, casual team sync to show them the shortcuts I found for the backend setup.\nWhat is a small reminder you can write down to look back on when times get tough?\nTake a deep breath. Every error message is just a hint, not a personal failure." },
  { userId: "2", date: "2026-08-22", journalEntry: "\nNice, quiet head space today. Really grateful for a peaceful day without urgent emergencies or broken builds." },
  { userId: "2", date: "2026-08-25", journalEntry: "\nFeeling pretty uninspired. Used the day to do boring but necessary chores like fixing file names and cleaning up git branches." },
  { userId: "2", date: "2026-08-28", journalEntry: "What went well today that made you feel balanced or peaceful?\nFinally tracked down a weird CSS inheritance issue that was driving me crazy.\nWho is someone you are glad to have in your life right now?\nOur PM, Dan. He stepped in and protected our scope when the client tried to add five random features at the last second.\nWhat helped you feel so steady and grounded today?\nDrinking a full bottle of water instead of coffee for once, and getting fresh air.\nHow can you protect and maintain this good energy moving forward?\nLearn to say 'no' when people try to dump extra tasks onto my plate out of nowhere." },
  { userId: "2", date: "2026-08-31", journalEntry: "What is bringing you so much joy, excitement, or bright energy right now?\nWe actually smashed our sprint goals and wrapped up the August milestone early!\nWhat is a fun idea or goal you feel inspired to jump into today?\nDoodling and brainstorming some fresh layout themes for our next big update.\nHow can you use this bright energy to lift up your own day or someone else's?\nHype up our QA tester in the public channel; they caught so many bugs before launch.\nWhat is a small reminder you can write down to look back on when times get tough?\nRemember to look back at how much better you are coding now compared to six months ago." },
  { userId: "3", date: "2026-08-02", journalEntry: "\nProductive Sunday afternoon. Got the weekly meal prep done and organized the kids' activity schedules for the week." },
  { userId: "3", date: "2026-08-05", journalEntry: "What went well today that made you feel balanced or peaceful?\nI sketched out the global component tree on my whiteboard before coding, and it saved me so much confusion later.\nWho is someone you are glad to have in your life right now?\nMy neighbor, Clara. She saw me struggling with all the grocery bags and held the front gate open for us.\nWhat helped you feel so steady and grounded today?\nGetting up thirty minutes before anyone else to make coffee and sit in the living room while it was completely quiet.\nHow can you protect and maintain this good energy moving forward?\nStop rushing the bedtime routine. Enjoying the quiet reading moments makes the night end on a peaceful note." },
  { userId: "3", date: "2026-08-07", journalEntry: "\nFeeling super isolated staying home with a toddler all day. Just want some adult conversation and a break from cleaning." },
  { userId: "3", date: "2026-08-10", journalEntry: "\nExhausted and losing my mind over a temper tantrum in the middle of Target. Giving myself permission to just order pizza tonight." },
  { userId: "3", date: "2026-08-12", journalEntry: "What is bringing you so much joy, excitement, or bright energy right now?\nMy oldest child put away all their toys without me having to repeat myself fifty times!\nWhat is a fun idea or goal you feel inspired to jump into today?\nSetting up an elaborate blanket fort in the living room for a family movie night snack party.\nHow can you use this bright energy to lift up your own day or someone else's?\nSending a funny picture of the kids to their grandparents to brighten up their afternoon work break.\nWhat is a small reminder you can write down to look back on when times get tough?\nThe fields can wait. They are only this little for a short time. The messy house can wait until tomorrow." },
  { userId: "3", date: "2026-08-15", journalEntry: "What is bringing you so much joy, excitement, or bright energy right now?\nFinally got the baby to take a long afternoon nap at the exact same time as my toddler's quiet hour!\nWhat is a fun idea or goal you feel inspired to jump into today?\nSitting down with my sketchpad to draw out some simple patterns for a knitting project I want to start.\nHow can you use this bright energy to lift up your own day or someone else's?\nLeaving a sweet voice message for my partner to tell them how much I appreciate their help around the house.\nWhat is a small reminder you can write down to look back on when times get tough?\nYou are a wonderful parent, even on days when the dinner gets burned and everyone is crying." },
  { userId: "3", date: "2026-08-17", journalEntry: "\nA totally stable, balanced day. Cleared through three loads of laundry and got the kitchen clean without any major fuss." },
  { userId: "3", date: "2026-08-20", journalEntry: "\nFeeling super anxious about our family budget changes this month. My chest feels tight, so I'm trying to strip down our grocery list." },
  { userId: "3", date: "2026-08-23", journalEntry: "\nEnergy levels are sitting at a zero. Just doing some basic toy sorting today where I can sit on the carpet and not think." },
  { userId: "3", date: "2026-08-26", journalEntry: "What went well today that made you feel balanced or peaceful?\nI reorganized the pantry containers, and now we don't have twenty boxes of half-eaten cereal spilling everywhere.\nWho is someone you are glad to have in your life right now?\nMy sister. She listens to me vent about household stresses without giving unsolicited advice or making me feel guilty.\nWhat helped you feel so steady and grounded today?\nPutting my phone on the kitchen counter during playtime so I was fully present with the kids instead of scrolling.\nHow can you protect and maintain this good energy moving forward?\nKeep limiting screen time during family hours. It keeps my mood much calmer." },
  { userId: "3", date: "2026-08-29", journalEntry: "What is bringing you so much joy, excitement, or bright energy right now?\nWe went to the neighborhood park today and the kids played nicely together for two straight hours!\nWhat is a fun idea or goal you feel inspired to jump into today?\nBaking some homemade blueberry muffins from scratch with the kids helping me stir the batter bowl.\nHow can you use this bright energy to lift up your own day or someone else's?\nDropping off a couple of fresh muffins to the sweet elderly lady who lives across the hallway from us.\nWhat is a small reminder you can write down to look back on when times get tough?\nYou are building a safe, happy childhood for them. That is the most important project." },
  { userId: "3", date: "2026-08-31", journalEntry: "\nWrapping up the month feeling stable and proud. The kids are healthy, the house is reasonably clean, and we are ready for September." }
];


export const contactUsData = [];