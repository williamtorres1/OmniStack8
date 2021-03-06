const Dev = require('../models/Dev');

module.exports = {
    async store(req, res){

        const { devId } = req.params
        const { user } = req.headers

        const targetDev = await Dev.findById(devId)
        const loggedDev = await Dev.findById(user)

        if(!targetDev){
            return res.status(400).json({ error: `Dev doesn't exist`})
        }

        loggedDev.dislikes.push(targetDev._id)

        await loggedDev.save()

        console.log(`User ${loggedDev.user} disliked ${targetDev.user}`)

        return res.status(201).json(loggedDev)
    }
}