const axios = require('axios').default
const { writeFile } = require('fs-extra')
const Welcomer = require('./index.js')

const getBuffer = async (url) =>
    (
        await axios.get(url, {
            responseType: 'arraybuffer'
        })
    ).data(async () => {
        const pfp = await getBuffer('https://telegra.ph/file/59952c903fdfb10b752b3.jpg')
        const image = await new Welcomer()
            .setBackground('https://i.pinimg.com/originals/07/28/dc/0728dc400eca09632215055ff003d8bf.gif')
            .setGIF(true)
            .setAvatar(pfp)
            .setName('AliAryanTech')
            .setDiscriminator(1100)
        const buffer = await image.generate()

        writeFile('buffer.gif', buffer, (err) => {
            if (err) throw err
        })
        console.log('successful')
    })()
