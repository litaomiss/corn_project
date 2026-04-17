<template>
  <div class="container">
    <h1>{{ title }}</h1>

    <p>{{ intro }}</p>

    <h2>{{ cron }}</h2>

    <p>{{ explanation }}</p>

    <!-- 工具 -->
    <CronBuilder />

    <!-- 运行时间 -->
    <h3>Next Run Times</h3>
    <NextRun :cron="cron" />

    <!-- FAQ -->
    <h3>FAQ</h3>

    <div v-for="(item, index) in faq" :key="index">
      <p><b>{{ item.q }}</b></p>
      <p>{{ item.a }}</p>
    </div>
  </div>
</template>

<script setup>
import CronBuilder from '../components/CronBuilder.vue'
import NextRun from '../components/NextRun.vue'

const title = "Cron Expression Every Day at Midnight"

const intro = "Use this cron expression to run a task every day at midnight."

const cron = "0 0 * * *"

const explanation = "This expression runs at 00:00 (midnight) every day."

const faq = [
  {
    q: "What time is midnight in cron?",
    a: "Midnight is represented as 0 0 in cron (hour 0, minute 0)."
  },
  {
    q: "Can I run at 1 minute past midnight?",
    a: "Yes, use 1 0 * * *."
  }
]
</script>