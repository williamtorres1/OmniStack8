const Dev = require('../models/Dev')

module.exports = {
    async store(req, res){
        const { devId } = req.params
        const { user } = req.headers

        const targetDev = await Dev.findById(devId)
        const loggedDev = await Dev.findById(user)

        if(!targetDev){
            return res.status(400).json({ error: `Dev doesn't exist`})
        }

        loggedDev.likes.push(targetDev._id)

        await loggedDev.save()

        console.log(`User ${loggedDev.user} liked ${targetDev.user}`)

        if(targetDev.likes.includes(loggedDev._id)){
            console.log('Deu match!')

            const loggedSocket = req.connectedUsers[user]
            const targetSocket = req.connectedUsers[devId]

            if (loggedSocket) {
                req.io.to(loggedSocket).emit('match', targetDev)
            }

            if (targetSocket) {
                req.io.to(targetSocket).emit('match', loggedDev)
            }
        }

        return res.status(201).json(loggedDev)
    }
}