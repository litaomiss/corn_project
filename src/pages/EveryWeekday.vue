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

const title = "Cron Expression Every Weekday"

const intro = "Use this cron expression to run a task every weekday (Monday to Friday)."

const cron = "0 0 * * 1-5"

const explanation = "This runs at midnight from Monday to Friday."

const faq = [
  {
    q: "What does 1-5 mean in cron?",
    a: "It represents Monday to Friday."
  },
  {
    q: "Does cron support names like MON-FRI?",
    a: "Some systems support it, but numbers are more reliable."
  }
]
</script>