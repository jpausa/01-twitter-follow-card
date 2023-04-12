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
        users.map((user) => {
          const { userName, name, isFollowing} = user;
          return (
          <TwitterFollowCard initialIsFollowing={isFollowing} userName={userName}>
          {name}
        </TwitterFollowCard>
        )
        })
      }
    </section>
  );
}
