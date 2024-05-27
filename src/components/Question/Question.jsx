import "./Question.css";

export default function Question({ question, answer }) {
  return (
    <div className="question-container shadow">
      <p className="title-font">Q: {question}</p>
      <div></div> {/* separator */}
      <p className="text-body-font">R: {answer}</p>
    </div>
  );
}
