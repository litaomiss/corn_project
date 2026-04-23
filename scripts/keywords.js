export default [
  {
    slug: "every-5-minutes",
    title: "Cron Expression Every 5 Minutes",
    cron: "*/5 * * * *",
    intro: "Use this cron expression to run a task every 5 minutes.",
    explanation: "This runs every 5 minutes.",
  },
  {
    slug: "every-10-minutes",
    title: "Cron Expression Every 10 Minutes",
    cron: "*/10 * * * *",
    intro: "Run a task every 10 minutes.",
    explanation: "This runs every 10 minutes.",
  },
  {
    slug: "every-day-midnight",
    title: "Cron Expression Every Day at Midnight",
    cron: "0 0 * * *",
    intro: "Run a task every day at midnight.",
    explanation: "This runs at 00:00 every day.",
  },
  {
    slug: "every-weekday",
    title: "Cron Expression Every Weekday",
    cron: "0 0 * * 1-5",
    intro: "Run a task Monday to Friday.",
    explanation: "Runs on weekdays.",
  }
]