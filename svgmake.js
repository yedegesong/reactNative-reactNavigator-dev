const fs = require('fs')
const path = require('path')

const filePath = `${path.resolve('app')}/components/icontsvg`
const readPath = `${path.resolve('fontsvg')}/iconfont.js`
// 判断文件夹是否存在
const isDirectory = () => {
  return new Promise((resolve) => {
    fs.access(filePath, (err) => {
      if (err) {
        resolve('faild')
      }
      resolve('ok')
    })
  })
}
// 创建文件夹
const creactMkdir = () => {
  return new Promise((resolve) => {
    fs.mkdir(filePath, (err) => {
      if (err) { return }
      resolve(true)
    })
  })
}
const writeSvg = () => {
  console.log('读取处理中...')
  fs.readFile(`${readPath}`, 'utf8', (err, data) => {
    if (err) {
      throw err
    } else {
      const svgArr = data.split('</symbol>')
      svgArr.pop()
      let svgTmp = ''
      let viewBox = ''
      svgArr.forEach((svg) => {
        const tmpPath = svg.split('<path')
        const viewBoxKey = tmpPath[0].match('id=.*"')[0].split('"')[1].replace('icon-', '').replace(/-(\w)/g, x => x.slice(1).toUpperCase())
        const viewBoxValue = tmpPath[0].match('viewBox=.*"')[0].split('"')[1]
        if (viewBoxValue !== '0 0 1024 1024') {
          viewBox[viewBoxKey] = viewBoxValue
          viewBox += `    ${viewBoxKey}: '${viewBoxValue}',\n`
        }
        const pathArr = []
        tmpPath.shift()
        tmpPath.forEach((paths) => {
          pathArr.push(`{${paths.replace(/=/g, ': ').replace('fill', ', fill').replace('></path>', '')}}`)
        })
        svgTmp += `  ${viewBoxKey}: [${pathArr}],\n`
      })
      const svgStr = `export default {\n${svgTmp}\n}`
      fs.writeFile(`${filePath}/iconfont.svg.js`, svgStr, 'utf8', () => {
        if (err) return
        console.log('写入成功')
      })
    }
  })
}
async function WriteFontSvg() {
  const directory = await isDirectory()
  if (directory === 'ok') {
    writeSvg()
  } else {
    const creact = await creactMkdir()
    if (creact) {
      console.log('创建成功')
      writeSvg()
    }
  }
}
WriteFontSvg()
