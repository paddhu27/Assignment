import TopSection from "./TopSection";
import CardList from "./CardList";
import ScreenshotButton from "./ScreenShotbtn";
function MainPage({cardData }) {
    return (
      <div>
        <ScreenshotButton/>
        <TopSection />
        <CardList data={cardData} />
      </div>
    );
  }
  
export default MainPage;