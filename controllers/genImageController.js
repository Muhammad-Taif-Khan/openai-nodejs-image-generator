const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});


const openai = new OpenAIApi(configuration);


const genImage = async (req, res) =>{
    const {prompt} = req.body;
    try{
        const response = await openai.createImage({
            prompt,
            n: 1,
            size: "1024x1024",
        });
        
        const image_url = response.data.data[0].url;
        res.status(200).json({
            status:"success",
            data: image_url
        });
    }
    catch(error){
        if (error.response) {
            res.status(400).json({
                status:"fail",
                error:error.response.status,
                data:error.response.data
            });
          } else {
            
            res.status(400).json({
                status:"fail",
                error:error.message
            })
          }
        
    }
}

module.exports = genImage;