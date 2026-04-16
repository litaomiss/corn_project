<template>
  <router-view />
</template>

<script setup>
import { ref } from 'vue'
import parser from 'cron-parser'
import dayjs from 'dayjs'

const cron = ref('*/5 * * * *')
const nextRuns = ref([])
const error = ref('')

const parseCron = () => {
  error.value = ''
  nextRuns.value = []

  try {
    const interval = parser.parseExpression(cron.value)

    for (let i = 0; i < 5; i++) {
      const next = interval.next().toDate()
      nextRuns.value.push(dayjs(next).format('YYYY-MM-DD HH:mm:ss'))
    }
  } catch (err) {
    error.value = 'Invalid cron expression'
  }
}
</script>

<style>
.container {
  max-width: 600px;
  margin: 50px auto;
  text-align: center;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>