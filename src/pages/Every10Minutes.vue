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

const title = "Cron Expression Every 10 Minutes"

const intro = "Run a task every 10 minutes."

const cron = "*/10 * * * *"

const explanation = "This expression means the task runs every 10 minutes, every hour, every day."

const faq = [
  {
    q: "What does */10 mean in cron?",
    a: "It means every 5 units of time, in this case, every 10 minutes."
  },
  {
    q: "Does this work in Linux crontab?",
    a: "Yes, this is a standard cron expression supported in Linux."
  }
]
</script>