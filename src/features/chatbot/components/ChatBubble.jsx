const ChatBubble = ({ type = "bot", children,className }) => {
  const baseClasses =
    "p-4 mb-8 sm:mb-12 w-3/4 min-h-16 rounded-4xl text-base sm:text-xl";
  const style =
    type === "user"
      ? "chat-gradient-blue text-white rounded-br-[5px] ml-auto"
      : "chat-gradient-gray rounded-bl-[5px]";
  return <div className={`${baseClasses} ${style} ${className}`}>{children}</div>;
};
export default ChatBubble