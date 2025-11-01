// import "./global.css";
import HomeBanner from "./components/HomeBanner";
import ShowCase from "./components/ShowCase";
export default function Home() {
  return (
    <>
      <div className='overflow-hidden'>
        <HomeBanner />
        <ShowCase />
      </div>
    </>
  );
}
