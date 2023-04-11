import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  return (
    <div className="App">
      <TwitterFollowCard isFollowing username="userName" name="Name" />
      <TwitterFollowCard
        isFollowing={false}
        username="userName1"
        name="Name1"
      />
    </div>
  );
}
