import TopSection from "./TopSection";
import CardList from "./CardList";
function MainPage({cardData }) {
    return (
      <div>
        <TopSection />
        <CardList data={cardData} />
      </div>
    );
  }
  
export default MainPage;