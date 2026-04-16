<template>
  <ul>
    <li v-for="(item, i) in list" :key="i">{{ item }}</li>
  </ul>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import parser from 'cron-parser'
import dayjs from 'dayjs'

const props = defineProps({
  cron: String
})

const list = ref([])

watchEffect(() => {
  list.value = []

  try {
    const interval = parser.parseExpression(props.cron)

    for (let i = 0; i < 5; i++) {
      list.value.push(
        dayjs(interval.next().toDate()).format('YYYY-MM-DD HH:mm:ss')
      )
    }
  } catch {}
})
</script>