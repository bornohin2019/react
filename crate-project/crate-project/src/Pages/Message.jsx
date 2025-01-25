const Message = ({ fruits }) => {
  return (
    <div>
      {fruits.map((fruit, index) => {
        return <p key={index}>{fruit}</p>; // return added
      })}
    </div>
  );
};

export default Message;
