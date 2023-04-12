import { useState } from "react";

export const TwitterFollowCard = ({
  children = "unknown",
  userName = "unknown",
  initialIsFollowing
}) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const buttonText = isFollowing ? "Following" : "Follow";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}/`}
          alt="user avatar"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{buttonText}</span>
          <span className="tw-followCard-stopFollow">Unfollow</span>
        </button>
      </aside>
    </article>
  );
};
