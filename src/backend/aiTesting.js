import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate, PromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

const splitter = new RecursiveCharacterTextSplitter();
const loader = new CheerioWebBaseLoader("https://en.wikipedia.org/wiki/Hamada");
const outputParaser = new StringOutputParser();
const chatModel = new ChatOpenAI({
  openAIApiKey: "",
});

export async function generateRoadMapStreamed(target, finishedCourses, job) {
  const prompt = ChatPromptTemplate.fromMessages([
    [
      "system",
      "you are a great {job} advisor you are really good in creating roadmaps for people to reach there target",
    ],
    [
      "user",
      "here is my target {target} and here is the courses I have finished {courses} I want you to generate me a roadmap to continue on the stuff I have learned and reach my goal and also explain to me why the things I have learned is important to know",
    ],
  ]);
  const chain = prompt.pipe(chatModel);
  const roadMap = await chain.stream({
    target: target,
    courses: finishedCourses,
    job: job,
  });
  for await (const chunk of roadMap) {
    console.log(chunk?.content);
  }
}

function extractJsonFromString(text) {
  try {
    // Find the start and end index of the JSON object within the text
    const startIndex = text.indexOf("{");
    const endIndex = text.lastIndexOf("}") + 1;

    // Extract the JSON string
    const jsonString = text.substring(startIndex, endIndex);

    // Parse the JSON string into a JavaScript object
    const jsonObject = JSON.parse(jsonString);

    return jsonObject;
  } catch (error) {
    console.error("Error extracting JSON from string:", error);
    return null;
  }
}
export async function generateRoadMap(target, finishedCourses, job) {
  const prompt = ChatPromptTemplate.fromMessages([
    [
      "system",
      "you are a great {job} advisor you are really good in creating roadmaps for people to reach there target you have to return the answer in json put each step I have to do inside an array with a key called steps and write how can the things I learned will help me in a string in a key called learned and add some recommended courses and resources in a key called resources return only the json only the json you have to stick to the following  json schema steps:[],learned:'',resources:[name:'',link:''] ",
    ],
    [
      "user",
      "here is my target {target} and here is the courses I have finished {courses} I want you to generate me a roadmap to continue on the stuff I have learned and reach my goal and also explain to me why the things I have learned is important to know and be motivating and add some emojies",
    ],
  ]);
  const chain = prompt.pipe(chatModel);
  const roadMap = await chain.invoke({
    target: target,
    courses: finishedCourses,
    job: job,
  });
  return extractJsonFromString(roadMap.content);
}
