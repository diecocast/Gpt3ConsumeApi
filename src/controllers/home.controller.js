import GptManager from "../config/gptManager.js";

let GptServices = new GptManager()
const home = async(req, res) => {
    const repsonse = await GptServices.question("Cual es la ccapital de colombia")
    console.log('RepsonseBack', repsonse)
    res.send(repsonse);
};

export default home