// import { Mail, Bell } from "./fontAwesome";

export const Header = ({ isBellActive = true }) => {
  return (
    <header>
      <a className="share-box">Share Proof</a>
      <div className="zoom">
        <div className="minus">-</div>
        <div className="percentage">150%</div>
        <div className="plus">+</div>
      </div>
      <div className={`bell ${isBellActive ? "" : "isActive"}`}>Bell</div>
    </header>
  );
};
