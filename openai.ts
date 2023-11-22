import {Con, OpenAIApi} from "openai";

const configuration = new Configuration({
    apiKey:process.env.OPEMNAI_API_KEY
});

const apenai = new OpenAIApi(configuration)
export default apenai