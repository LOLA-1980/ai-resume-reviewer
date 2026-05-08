import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

function App() {

  console.log(process.env.REACT_APP_GEMINI_API_KEY);
  
  const [resume, setResume] = useState("");
  const [response, setResponse] = useState("");

  const genAI = new GoogleGenerativeAI(
    process.env.REACT_APP_GEMINI_API_KEY
  );

  const analyzeResume = async () => {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
    });

    const prompt = `
    Analyze this resume and provide:
    - strengths
    - weaknesses
    - suggestions for improvement
    - skills missing for AI/cloud jobs

    Resume:
    ${resume}
    `;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    setResponse(text);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>AI Resume Reviewer</h1>

      <textarea
        rows="10"
        cols="60"
        placeholder="Paste your resume here..."
        value={resume}
        onChange={(e) => setResume(e.target.value)}
      />

      <br /><br />

      <button onClick={analyzeResume}>
        Analyze Resume
      </button>

      <div style={{ marginTop: "30px", whiteSpace: "pre-wrap" }}>
        {response}
      </div>
    </div>
  );
}

export default App;