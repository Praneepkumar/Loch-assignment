import "./Notifications.css";
import "../App.css";
import NotificationCard from "./NotificationCard";

const Notifications = () => {
  const cardData = [
    { checkbox: false, icon: "bell-small.svg" },
    {
      checkbox: true,
      icon: "bar-chart.svg",
      settingsText: "Notify me when any wallets move more than",
      dropDownText: "$1,000.00",
      settingsMessage: null,
    },
    {
      checkbox: true,
      icon: "clock.svg",
      settingsText: "Notify me when any wallet dormant for",
      dropDownText: "> 30 days",
      settingsMessage: "becomes active",
    },
  ];

  return (
    <section className='notifications'>
      <div className='notifications-left flex-col-content'>
        <div className='content-icon'>
          <img
            className='img-responsive'
            src={process.env.PUBLIC_URL + "/assets/notifications.svg"}
            alt='bell-icon'
          />
        </div>
        <h3>Get notified when a highly correlated whale makes a move</h3>
        <p>
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </p>
      </div>
      <div className='notifications-slider'>
        <div className='slide-track'>
          <div className='slide-container'>
            <NotificationCard {...cardData[0]} />
            <NotificationCard {...cardData[1]} />
            <NotificationCard {...cardData[2]} />
          </div>
          <div className='slide-container'>
            <NotificationCard {...cardData[0]} />
            <NotificationCard {...cardData[1]} />
            <NotificationCard {...cardData[2]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notifications;
