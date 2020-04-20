const { express } = require('../config/server');
const { sendMail } = require('../utils/sendMail');
const router = express.Router();

router.post('/', async (req, res) => {
    let resObj = {
        success: false,
        message: 'Something isn\'t right here, Please try in sometime'
    }
    try {
        const info = await sendMail(req.body);
        resObj = {
            success: true,
            data: info,
            message: 'Mail send successfully.'
        }
        res.status(200).send(resObj)
    } catch (error) {
        resObj.error = error.message;
        res.status(500).send(resObj)
    }
})

module.exports = router;


