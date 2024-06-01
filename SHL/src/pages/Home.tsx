import Landing from "../components/Home/Landing";
import Quote from "../components/Home/Quote"
import How from "../components/Home/How";
import "../styles/Home.css"

function Home() {
  return (
    <>
      <div>
        <Landing />
        <Quote />
        <How />
      </div>
    </>
  );
}
export default Home;
