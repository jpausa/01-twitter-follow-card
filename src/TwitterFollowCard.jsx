export const TwitterFollowCard = ({
  children = "unknown",
  userName = "unknown",
  isFollowing = false,
}) => {
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
        <button className="tw-followCard-button">Follow</button>
      </aside>
    </article>
  );
};
