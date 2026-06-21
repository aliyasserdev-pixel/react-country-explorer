import "./ShowMessage.css";

const ShowMessage = ({ type, message }) => {
  const getIcon = () => {
    switch (type) {
      case "loading":
        return "⏳";
      case "error":
        return "❌";
      case "empty":
        return "📭";
      default:
        return "ℹ️";
    }
  };

  return (
    <div className={`message-container ${type}`}>
      <div className="message-icon">{getIcon()}</div>
      <p className="message-text">{message}</p>
    </div>
  );
};

export default ShowMessage;
