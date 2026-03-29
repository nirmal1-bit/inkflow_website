export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Demo", href: "#demo" },
];

export const stripItems = [
  "✦ Handwriting Recognition",
  "⚡ AI Task Extraction",
  "🔔 Smart Alarms",
  "📊 Habit Heatmap",
  "🗂️ Auto Categorization",
  "🎯 Priority Ranking",
  "⏰ Time Detection",
  "🌍 Multilingual Support",
];

export const features = [
  {
    title: "Scan Handwriting",
    description:
      "Point your camera at any note. Inklist reads your handwriting — no matter how messy — and pulls out every actionable task.",
    icon: "camera",
    tone: "accent-soft",
    iconColor: "text-accent",
  },
  {
    title: "AI Task Extraction",
    description:
      'GPT-powered extraction understands context. "Call mom Friday 6pm" becomes a task with alarm, category, and urgency — automatically.',
    icon: "zap",
    tone: "rose",
    iconColor: "text-rose-brand",
  },
  {
    title: "Smart Categorization",
    description:
      "Tasks are automatically sorted into Work, Education, Personal, Hobby, and more. Your priorities surface without lifting a finger.",
    icon: "layout-grid",
    tone: "green",
    iconColor: "text-green-brand",
  },
  {
    title: "Smart Alarms",
    description:
      'Write #alarm in your note and Inklist sets the reminder for you. Time-range detection handles everything from "6pm" to "14:00–15:00".',
    icon: "bell",
    tone: "amber",
    iconColor: "text-amber-500",
  },
  {
    title: "Habit Heatmap",
    description:
      "Contribution-style heatmap tracks your consistency. Build streaks, spot patterns, and watch your discipline compound over weeks.",
    icon: "activity",
    tone: "indigo",
    iconColor: "text-indigo-500",
  },
  {
    title: "Personalized Priority",
    description:
      "Tell Inklist if you're a student, professional, or personal-focus user. Tasks are ranked by what matters most to you.",
    icon: "user-check",
    tone: "neutral",
    iconColor: "text-ink/60",
  },
];

export const steps = [
  {
    number: "01",
    label: "Capture",
    tone: "accent",
    title: "Write freely, scan instantly",
    description:
      "Jot down anything on paper — grocery list, meeting notes, study reminders. Then open Inklist and snap a photo. That's it.",
  },
  {
    number: "02",
    label: "AI Organizes",
    tone: "rose",
    title: "AI reads, extracts & organizes",
    description:
      "The AI engine identifies every task, assigns categories and urgency, detects time ranges, and flags alarms — all in seconds.",
  },
  {
    number: "03",
    label: "Track",
    tone: "green",
    title: "Build habits, track streaks",
    description:
      "Mark tasks complete and watch your habit heatmap grow. Small daily wins compound into lasting productivity.",
  },
];

export const audienceCards = [
  {
    emoji: "🎓",
    title: "Students",
    description:
      "Exams, homework, and deadlines get top priority. Never miss a submission again, no matter how chaotic your notes are.",
    border: "#4F46E5",
    pillLabel: "EDUCATION → URGENT",
    pillClass: "bg-accent-soft text-accent",
  },
  {
    emoji: "💼",
    title: "Professionals",
    description:
      "Client meetings, proposals, and deadlines surface first. Your work tasks get the urgency they deserve.",
    border: "#E85D8A",
    pillLabel: "WORK → URGENT",
    pillClass: "bg-[rgba(232,93,138,0.1)] text-rose-brand",
  },
  {
    emoji: "🌱",
    title: "Personal Focus",
    description:
      "Health, family, and self-care come first. Build the life you actually want, one small win at a time.",
    border: "#7FB800",
    pillLabel: "PERSONAL → URGENT",
    pillClass: "bg-[rgba(127,184,0,0.1)] text-green-brand",
  },
];
