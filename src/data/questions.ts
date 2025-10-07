export interface Question {
  question: string;
  options: string[];
  answer: string;
}

export const questions: Question[] = [
  {
    question: "React JS kis language ke sath use hota hai?",
    options: ["Python", "JavaScript", "C++", "PHP"],
    answer: "JavaScript",
  },
  {
    question: "Tailwind CSS ka use kis liye hota hai?",
    options: ["Backend", "Styling", "Database", "Security"],
    answer: "Styling",
  },
  {
    question: "React me state ko update karne ke liye kya use hota hai?",
    options: ["setState", "getState", "update", "change"],
    answer: "setState",
  },
  {
    question: "HTML stands for?",
    options: [
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "HyperText Markup Language",
      "HyperText Makeup Language",
    ],
    answer: "HyperText Markup Language",
  },
  {
    question: "CSS ka full form kya hai?",
    options: [
      "Colorful Style Sheets",
      "Creative Styling System",
      "Cascading Style Sheets",
      "Computer Styled Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "JavaScript ko kis ke liye use kiya jata hai?",
    options: [
      "Backend Development",
      "Styling",
      "Web Interactivity",
      "Database",
    ],
    answer: "Web Interactivity",
  },
  {
    question: "HTML me image add karne ke liye kaunsa tag use hota hai?",
    options: ["<img>", "<image>", "<src>", "<pic>"],
    answer: "<img>",
  },
  {
    question: "CSS me colors set karne ke liye kaunsa property hoti hai?",
    options: ["font", "background", "color", "text"],
    answer: "color",
  },
  {
    question: "JavaScript me array ka length check karne ke liye kaunsa property use hota hai?",
    options: ["size", "count", "length", "index"],
    answer: "length",
  },
  {
    question: "React me component ko banane ke liye kya use karte hain?",
    options: ["Functions ya Classes", "Variables", "Loops", "Tags"],
    answer: "Functions ya Classes",
  },
];