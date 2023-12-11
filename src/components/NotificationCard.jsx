import React from "react";
import "./NotificationCard.css";
import "../App.css";

const NotificationCard = ({
  checkbox,
  icon,
  settingsText,
  dropDownText,
  settingsMessage,
}) => {
  return (
    <div
      className={
        !checkbox ? "notification-card" : "notification-card bg-white"
      }>
      <div className='content-header'>
        <div className='notification-icon'>
          <img
            src={"assets/" + icon}
            alt='notification-icon'
            className='img-responsive'
          />
        </div>
        {!checkbox ? (
          <button className='save-button'>Save</button>
        ) : (
          <input type='checkbox' defaultChecked />
        )}
      </div>
      {!checkbox ? (
        <div className='input-content'>
          <h4>We’ll be sending notifications to you here</h4>
          <input
            type='email'
            placeholder='your email address'
            className='input-box'
          />
        </div>
      ) : (
        <div
          className={
            !settingsMessage
              ? "checkbox-content"
              : "checkbox-content settings-message"
          }>
          <p>{settingsText}</p>
          <span className='dropdown'>
            {dropDownText}
            <img
              className='dropdown-icon'
              src='assets/triangle-down.svg'
              alt='triangle-down'
            />
          </span>

          <p>{settingsMessage}</p>
        </div>
      )}
    </div>
  );
};

export default NotificationCard;
