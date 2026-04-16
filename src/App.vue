<template>
  <div class="container">
    <h1>Cron Expression Generator</h1>

    <el-input
      v-model="cron"
      placeholder="Enter cron expression e.g. */5 * * * *"
      style="margin-bottom: 20px"
    />

    <el-button type="primary" @click="parseCron">
      Generate
    </el-button>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="nextRuns.length">
      <h3>Next Runs:</h3>
      <ul>
        <li v-for="(item, index) in nextRuns" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
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