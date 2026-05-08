function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>AI Resume Reviewer</h1>

      <textarea
        placeholder="Paste your resume here..."
        rows="10"
        cols="60"
      />

      <br /><br />

      <button>Analyze Resume</button>
    </div>
  );
}

export default App;