## Welcomer-gif
[![NPM](https://img.shields.io/badge/Available%20On-NPM-lightgrey.svg?logo=npm&logoColor=DA291A&labelColor=white&style=flat-square)](https://www.npmjs.com/package/welcomer-gif)

### Installation
```
yarn add welcomer-gif
```

### Preview
![img](https://telegra.ph/file/d3d701021bf26fdda78eb.gif)

### Class `Welcomer`:

The use of the class `Welcomer`(module).

#### Parameters:

| Parameters            | Type    | Description                        |
| -------------------- | -------- | ---------------------------------- |
| _options_            | `Object` |welcome options     |
| _setName_ | `string` | Set name of the user. |
| _setAvatar_ | `string` | Set avatar of the user string or Buffer. |
| _setDiscriminator_ | `number` | Set discriminator/tag of user. |
| _setBackground_ | `string` | Set background of the gif. |
| _setGIF_ | `boolean` | Set if the background you want to use is a gif or not. |
| _setBlur_ | `number` | Set the blur value if don't then don't use it. |

### Example:
```js
const axios = require('axios')
const Welcomer = require('welcomer-gif')
const { writeFile } = require('fs-extra')

const getBuffer = async (url) =>
  (
    await axios.get(url, {
      responseType: 'arraybuffer',
    })
  ).data

const welcomer = async () => {
  const avatar = await getBuffer('https://telegra.ph/file/59952c903fdfb10b752b3.jpg')
  const image = await new Welcomer()
    .setBackground('https://i.pinimg.com/originals/07/28/dc/0728dc400eca09632215055ff003d8bf.gif')
    .setGIF(true)
    .setAvatar(avatar)
    .setName('AlιAryαɴTech')
    .setDiscriminator(1100)
    .setBlur(2)
  const buffer = await image.generate()

  writeFile('buffer.gif', buffer, (err) => {
    if (err) throw err
  })
  console.log('successful')
}
welcomer()
```

### Thanks To
* [`Canvas`](https://www.npmjs.com/package/canvas)
* [`CTK WARRIOR`](https://github.com/CTK-WARRIOR)
