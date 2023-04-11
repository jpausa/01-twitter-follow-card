import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  return (
    <div className="App">
      <TwitterFollowCard isFollowing userName="userName">
        name
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing={false} userName="userName1">
        name1
      </TwitterFollowCard>
    </div>
  );
}
