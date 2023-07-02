export const Notification = ({ message }) => {
  return (
    <div className="notification__container">
      <h2 className="notification">{message}</h2>
    </div>
  );
};
