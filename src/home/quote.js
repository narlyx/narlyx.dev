// Quote list
const quotes = [
  "The loneliness came back... worse than I remembered...",
  "I'm the dream catcher but nothing but nightmares I've caught.",
  "Die young and leave a pretty corpse.",
  "When I was here, I wanted to be there",
  "Maybe we meet again in another lifetime.",
  "Today is the sort of day where the sun only comes up to humiliate you.",
  "It's only after you have lost everything that you are free to do anything.",
  "I alone, had no body, no senses, no feelings. I was in hell, looking a heaven.",
  "Fuck that, do what makes you fucking happy, cause' at the end of the day, whose there? You.",
  "Can you please help me find my friend? I'll give you anything you need multiplied by ten. I heard he moved to a place where the time don't end, so you dont need money, all you got is time to spend.",
  "If I grew wings, I think I would fly too close to the sun.",
  "Create your past and forget your future.",
  "The lower you fall the higher you'll fly.",
  "You are truly, the most... wonderful person I have ever met.",
  "Ten minutes can't go past without you brushing my thoughts, thats 1440 a day or so I'll say a 144 times I think about you are something like that... lost match...",
  "My flaws burn though my skin like demonic flames from hell.",
  "My scars are like evidence being mailed to the judge.",
  "I will celebrate for stepping on broken glass and slipping on stomach soaked floors.",
  "I no longer feel the razor guiding my heel.",
  "Two sides of the same coin.",
  "Oh well... you know me too well...",
  "When I feel the warmth of a hug again but instead the jack slipped and crushed my ribs.",
  "...and to those I love, thanks for sticking around.",
  "Loves going to get you killed...",
  "...but pride will be the death of you and you and me...",
  "Tormented with nightmares.",
  "Time heals but I have no time.",
  "Alexthemia hm?...",
  "You aint shakespeare.",
  "The lap timer resets yet the cracks still remain in the frame.",
];

async function loadQuote() {
  document.getElementById("quote");
  await new Promise((resolve) => setTimeout(resolve, 350));
  document.getElementById("quote").innerText =
    '"' + quotes[Math.floor(Math.random() * quotes.length)] + '"';
}
loadQuote();
setInterval(loadQuote, 60000);
