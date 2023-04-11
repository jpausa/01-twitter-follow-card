export const TwitterFollowCard = ({
  children = "unknown",
  userName = "unknown",
  isFollowing = false,
}) => {
  const buttonText = isFollowing ? "Following" : "Unfollow";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";
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
        <button className={buttonClassName}>{buttonText}</button>
      </aside>
    </article>
  );
};
