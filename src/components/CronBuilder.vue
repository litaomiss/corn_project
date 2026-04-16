<template>
  <div>
    <el-form label-width="120px">

      <el-form-item label="Minutes">
        <el-select v-model="minutesType">
          <el-option label="Every minute" value="*" />
          <el-option label="Every N minutes" value="step" />
          <el-option label="Specific" value="specific" />
        </el-select>

        <el-input-number
          v-if="minutesType === 'step'"
          v-model="minutesStep"
          :min="1"
          :max="59"
        />

        <el-input
          v-if="minutesType === 'specific'"
          v-model="minutesSpecific"
          placeholder="e.g. 0,15,30"
        />
      </el-form-item>

      <el-form-item label="Hours">
        <el-select v-model="hoursType">
          <el-option label="Every hour" value="*" />
          <el-option label="Specific hour" value="specific" />
        </el-select>

        <el-input-number
          v-if="hoursType === 'specific'"
          v-model="hoursSpecific"
          :min="0"
          :max="23"
        />
      </el-form-item>

    </el-form>

    <div class="result">
      <h3>{{ cron }}</h3>
      <el-button @click="copy">Copy</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const minutesType = ref('*')
const minutesStep = ref(5)
const minutesSpecific = ref('0')

const hoursType = ref('*')
const hoursSpecific = ref(0)

const cron = computed(() => {
  let min = '*'
  let hour = '*'

  if (minutesType.value === 'step') {
    min = `*/${minutesStep.value}`
  } else if (minutesType.value === 'specific') {
    min = minutesSpecific.value
  }

  if (hoursType.value === 'specific') {
    hour = hoursSpecific.value
  }

  return `${min} ${hour} * * *`
})

const copy = () => {
  navigator.clipboard.writeText(cron.value)
}
</script>

<style scoped>
.result {
  margin-top: 20px;
  text-align: center;
}
</style>