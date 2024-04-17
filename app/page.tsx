import Articles from "./components/Articles";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="bg-base-200">
      <NavBar/>
      <Articles/>
    </main>
  );
}
