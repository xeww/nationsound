import "./Question.css";

export default function Question({ question, answer }) {
  return (
    <div className="question-container shadow">
      <p className="title-font">{question}</p>
      <div></div> {/* separator */}
      <p className="text-body-font">{answer}</p>
    </div>
  );
}
