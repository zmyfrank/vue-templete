export function isPhone (val) {
  return /^1(3[0-9]|4[57]|5[0-35-9]|66|7[0135678]|8[0-9]|9[8-9])\d{8}$/.test(parseInt(val))
}

export function isName (val) {
  const reg = /^([\u4e00-\u9fa5·s]{1,20}|[a-zA-Z.s]{1,20})$/
  if (!val) return false
  return reg.test(val)
}

export function isMail (val) {
  const reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
  if (!val) return false
  return reg.test(val)
}

export function isIdcard (val) {
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  if (!val || !reg.test(val)) return false

  function validate (id17, lastNumber) {
    const weight = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
    const validate = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
    let sum = 0
    let mode = 0
    for (let i = 0, length = id17.length; i < length; i++) {
      sum = sum + id17.charAt(i) * weight[i]
    }
    mode = sum % 11
    return validate[mode] === lastNumber
  }

  return validate(String(val).slice(0, 17), String(val).slice(17, 18))
}

export function obj2Str (val) {
  const obj2Str = Object.prototype.toString
  return obj2Str.call(val)
}

export function isNull (val) {
  return val === null
}

export function isNumber (val) {
  return obj2Str(val) === '[object Number]'
}

export function unixTimeTrans (unix) {
  let val = ''
  if (typeof unix === 'object') {
    val = new Date(unix)
  } else {
    val = new Date(parseInt(unix))
  }
  let o = {
    'Y': val.getFullYear(), // 年份
    'M': (val.getMonth() + 1) < 10 ? `0${val.getMonth() + 1}` : val.getMonth() + 1, // 月份
    'd': val.getDate() < 10 ? `0${val.getDate()}` : val.getDate(), // 日
    'h': val.getHours(), // 小时
    'm': val.getMinutes(), // 分
    's': val.getSeconds(), // 秒
    'q': Math.floor((val.getMonth() + 3) / 3), // 季度
    'S': val.getMilliseconds() // 毫秒
  }
  return o
}

export function merge (target) {
  for (let i = 1, j = arguments.length; i < j; i++) {
    let source = arguments[i] || {}
    for (let prop in source) {
      if (source.hasOwnProperty(prop)) {
        let value = source[prop]
        if (value !== undefined) {
          target[prop] = value
        }
      }
    }
  }
  return target
}

export function telNumberFormate (val) {
  if (!isNumber(val)) return
  let arr = val.toString()
  return `${arr.slice(0, 3)} ${arr.slice(3, 7)} ${arr.slice(7, 11)}`
}

export function getRandomArrayElements (arr, count) {
  let shuffled = arr.slice(0)
  let i = arr.length
  let min = i - count
  let temp
  let index
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random())
    temp = shuffled[index]
    shuffled[index] = shuffled[i]
    shuffled[i] = temp
  }
  return shuffled.slice(min)
}

export function throttle (func, wait, options) {
  let context, args, result
  let timeout = null
  let previous = 0
  if (!options) options = {}
  let later = function () {
    previous = options.leading === false ? 0 : Date.now()
    timeout = null
    result = func.apply(context, args)
    if (!timeout) context = args = null
  }
  return function () {
    let now = Date.now()
    if (!previous && options.leading === false) previous = now
    let remaining = wait - (now - previous)
    context = this
    args = arguments
    if (remaining <= 0 || remaining > wait) {
      clearTimeout(timeout)
      timeout = null
      previous = now
      result = func.apply(context, args)
      if (!timeout) context = args = null
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining)
    }
    return result
  }
}

export function debounce (func, wait, immediate) {
  let timeout, args, context, timestamp, result
  let later = function () {
    let last = Date.now() - timestamp
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }
  return function () {
    context = this
    args = arguments
    timestamp = Date.now()
    let callNow = immediate && !timeout
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }
    return result
  }
}

export function compress (base64, resolve, reject, maxWidth = 800) {
  let img = document.createElement('img')
  img.src = base64
  img.onload = function () {
    let cvs = document.createElement('canvas')
    let width = img.naturalWidth
    let height = img.naturalHeight
    let imgRatio = width / height
    // 如果图片维度超过了给定的maxWidth 800
    // 为了保持图片宽高比，计算画布的大小
    // if (width > maxWidth) {
    //   width = maxWidth
    //   height = width / imgRatio
    // }
    width = maxWidth
    height = width / imgRatio
    cvs.width = width
    cvs.height = height
    let ctx = cvs.getContext('2d')
    ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, width, height)
    // 图片质量进行适当压缩
    let quality = width >= 1500 ? 0.5
      : width > 600 ? 0.6 : 1
    // 导出图片为base64
    let mimeType = base64.split(',')[0].split(':')[1].split(';')[0]
    let newImageData = cvs.toDataURL(mimeType, quality)
    return resolve(dataURItoBlob(newImageData))
  }
}

function dataURItoBlob (base64Data) {
  let byteString
  if (base64Data.split(',')[0].indexOf('base64') >= 0) {
    byteString = atob(base64Data.split(',')[1])
  } else {
    byteString = unescape(base64Data.split(',')[1])
  }
  let mimeString = base64Data.split(',')[0].split(':')[1].split(';')[0]
  let ia = new Uint8Array(byteString.length)
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }
  return new Blob([ia], {type: mimeString})
}

export function fontSizefy (data) {
  // const map = {
  //   '1': '12',
  //   '2': '13',
  //   '3': '16',
  //   '4': '18',
  //   '5': '24',
  //   '6': '32',
  //   '7': '48'
  // }
  // let dpr = document.documentElement.dataset['dpr']
  try {
    let div = document.createElement('div')
    div.innerHTML = data
    let fonts = div.getElementsByTagName('font')
    for (let i = 0, length = fonts.length; i < length; i++) {
      fonts[i].removeAttribute('size')
    }
    div.querySelectorAll('[style*="font-size"]').forEach(function (item) {
      item.removeAttribute('font-size')
    })
    return div
  } catch (e) {
    alert(e)
    return data
  }
}

export function getGeolocation (resolve, reject) {
  let lat = ''
  let lng = ''
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
      lat = position.coords.latitude
      lng = position.coords.longitude
      resolve({lat, lng})
    }, (error) => {
      console.error(error)
      resolve({lat: 0, lng: 0})
    })
  }
}

export function isWeChatBrowser () {
  return /micromessenger/.test(navigator.userAgent.toLowerCase())
}
