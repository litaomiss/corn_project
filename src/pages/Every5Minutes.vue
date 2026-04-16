<template>
  <div class="container">
    <h1>Cron Expression Every 5 Minutes</h1>

    <p>
      The cron expression for running a task every 5 minutes is:
    </p>

    <h2>*/5 * * * *</h2>

    <p>
      This expression means the task runs every 5 minutes.
    </p>

    <!-- 嵌入工具 -->
    <CronBuilder />

    <h3>Next Run Times</h3>
    <NextRun :cron="'*/5 * * * *'" />

    <h3>FAQ</h3>

    <p><b>Is this standard cron?</b></p>
    <p>Yes, this works in Linux crontab.</p>

    <p><b>Can I change to every 10 minutes?</b></p>
    <p>Yes, use */10 * * * *</p>
  </div>
</template>

<script setup>
import CronBuilder from '../components/CronBuilder.vue'
import NextRun from '../components/NextRun.vue'
</script>