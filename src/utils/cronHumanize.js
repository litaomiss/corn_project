export function humanizeCron(cron) {
  try {
    const parts = cron.split(' ')
    const [min, hour] = parts

    let text = ''

    // 分钟
    if (min === '*') {
      text += 'Every minute'
    } else if (min.startsWith('*/')) {
      text += `Every ${min.replace('*/', '')} minutes`
    } else {
      text += `At minute ${min}`
    }

    // 小时
    if (hour === '*') {
      text += ' of every hour'
    } else {
      text += ` at hour ${hour}`
    }

    return text
  } catch {
    return 'Invalid cron'
  }
}