import {unixTimeTrans, telNumberFormate} from './utils2'

function getRemainTime (endTime, deviceTime, serverTime) {
  // let t = endTime - Date.parse(new Date()) - serverTime + deviceTime
  let t = endTime - Date.parse(new Date())
  let seconds = Math.floor((t / 1000) % 60)
  let minutes = Math.floor((t / 1000 / 60) % 60)
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24)
  let days = Math.floor(t / (1000 * 60 * 60 * 24))
  if (days > 2) {
    hours += days * 24
  }
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  }
}

function formateTime (val) {
  const time = formate(val)
  console.log(time)
  if (isNaN(time.Y)) return ''
  return `${time.Y}.${time.M}.${time.d} ${insertZeroBf(time.h)}:${insertZeroBf(time.m)}`
}

function formateLocalTime (val) {
  const time = formate(val)
  return `${time.Y}年${time.M}月${time.d}日 ${insertZeroBf(time.h)}:${insertZeroBf(time.m)}`
}

function formate (val) {
  let data = parseInt(val).toString().length === 10 ? val * 1000 : val
  return unixTimeTrans(data)
}

function insertZeroBf (val) {
  const copy = parseInt(val)
  if (isNaN(copy)) return copy
  return copy < 10 ? `0${copy}` : copy
}

function days (day) {
  if (day > 0 && typeof day === 'number') return day * 24 * 60 * 60 * 1000
}

function transTimeToLocal (val) {
  // console.log(val)
  const week = ['日', '一', '二', '三', '四', '五', '六']
  if (!val || !val.startTime || !val.endTime) return '未知时间, 请电话咨询'
  const startTime = new Date(parseInt(val.startTime) * 1000)
  const endTime = new Date(parseInt(val.endTime) * 1000)
  // console.log(startTime, endTime)
  const now = new Date()
  let calculateTime = ''
  let absolutTime = ''
  let kind = ''
  if (now > startTime && now <= endTime) {
    absolutTime = Math.abs(endTime.getTime() - now.getTime())
    calculateTime = endTime
    kind = '结束'
  } else if (now <= startTime) {
    absolutTime = Math.abs(startTime.getTime() - now.getTime())
    calculateTime = startTime
    kind = '开始'
  } else {
    return '已结束'
  }
  if (absolutTime < days(1) &&
    now.getDate() === calculateTime.getDate()) {
    return `今天 ${insertZeroBf(calculateTime.getHours())}:${insertZeroBf(calculateTime.getMinutes())} ${kind}`
  } else if (absolutTime < days(2) &&
    (calculateTime.getDay() - now.getDay() === 1 || calculateTime.getDay() - now.getDay() === -6)) {
    return `明天 ${insertZeroBf(calculateTime.getHours())}:${insertZeroBf(calculateTime.getMinutes())} ${kind}`
  } else if (calculateTime.getDay() - now.getDay() < 6 &&
    calculateTime.getDay() - now.getDay() > 0 &&
    absolutTime < days(6) &&
    now.getDay() !== 0 &&
    calculateTime.getDay() !== 0) {
    return `本周${week[calculateTime.getDay()]} ${insertZeroBf(calculateTime.getHours())}:${insertZeroBf(calculateTime.getMinutes())} ${kind}`
  } else if (absolutTime < days(7) &&
    calculateTime.getDay() === 0) {
    return `本周日${insertZeroBf(calculateTime.getHours())}:${insertZeroBf(calculateTime.getMinutes())} ${kind}`
  } else if (absolutTime > days(14)) {
    return `${calculateTime.getFullYear()}.${insertZeroBf(calculateTime.getMonth() + 1)}.${insertZeroBf(calculateTime.getDate())} ${insertZeroBf(calculateTime.getHours())}:${insertZeroBf(calculateTime.getMinutes())} ${kind}`
  } else {
    return `下周${week[calculateTime.getDay()]} ${insertZeroBf(calculateTime.getHours())}:${insertZeroBf(calculateTime.getMinutes())} ${kind}`
  }
}

function valideTime (stime, etime) {
  if (!stime || !etime) return
  return transTimeToLocal({
    startTime: stime,
    endTime: etime
  })
    .replace('开始', '可用')
    .replace('结束', '过期')
}

function timeSpend (option) {
  let val
  if (option.last) {
    val = option.endTime
  } else {
    val = option
  }
  let data2 = parseInt(val).toString().length === 10 ? val * 1000 : val
  const now = new Date()
  const time = new Date(data2)
  let absolutTime = now.getTime() - time.getTime()
  if (option.last) absolutTime = -absolutTime
  if (absolutTime < 0) return '刚刚参加'
  if (absolutTime >= days(1)) {
    // 注释掉的为求出的精确 天 时 分 秒，但是现在只模糊到天
    // 貌似用递归求更加简单。。。。
    // return `${Math.floor(absolutTime / days(1))}天${Math.floor(absolutTime % days(1) / (days(1) / 24))}时${Math.floor(absolutTime % days(1) % (days(1) / 24) / (days(1) / 24 / 60))}分${Math.floor(absolutTime % days(1) % (days(1) / 24) % (days(1) / 24 / 60) / (days(1) / 24 / 60 / 60))}秒`
    return `${Math.floor(absolutTime / days(1))}天前`
  } else if (absolutTime >= (days(1) / 24) && absolutTime < days(1)) {
    // return `${Math.floor(absolutTime / (days(1) / 24))}时${Math.floor(absolutTime % (days(1) / 24) / (days(1) / 24 / 60))}分${Math.floor(absolutTime % (days(1) / 24) % (days(1) / 24 / 60) / (days(1) / 24 / 60 / 60))}秒`
    return `${Math.floor(absolutTime / (days(1) / 24))}时前`
  } else if (absolutTime >= (days(1) / 24 / 60) && absolutTime < (days(1) / 24)) {
    // return `${Math.floor(absolutTime / (days(1) / 24 / 60))}分${Math.floor(absolutTime % (days(1) / 24 / 60)) / (days(1) / 24 / 60 / 60)}秒`
    return `${Math.floor(absolutTime / (days(1) / 24 / 60))}分前`
  } else {
    return `${Math.floor(absolutTime / (days(1) / 24 / 60 / 60))}秒前`
  }
}

export default {
  timeSpend,
  transTimeToLocal,
  formateTime,
  telNumberFormate,
  formateLocalTime,
  valideTime,
  insertZeroBf,
  getRemainTime
}
