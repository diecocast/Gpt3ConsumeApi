import GptManager from "../config/gptManager.js";

let GptServices = new GptManager()
const home = async(req, res) => {
    res.render('index.html');
};

const question = async(req,res) =>{
    const text = await GptServices.question(`${req.body.request}`)
    res.send({response:text})
}

export default {
    home,
    question
}