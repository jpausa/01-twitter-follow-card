import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  { userName: "john", name: "John", isFollowing: true },
  { userName: "albertt", name: "albert", isFollowing: true },
  { userName: "johnd", name: "John Doe", isFollowing: false },
];
export function App() {
  return (
    <section className="App">
      {
        users.map(({ userName, name, isFollowing}) => {
          return (
          <TwitterFollowCard key={userName} initialIsFollowing={isFollowing} userName={userName}>
          {name}
        </TwitterFollowCard>
        )
        })
      }
    </section>
  );
}
