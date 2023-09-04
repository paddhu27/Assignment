import TopSection from "./TopSection";
import CardList from "./CardList";
import BasicButtons from "./ButtonGrid";
import DateSelector from "./Buttonfirst";
function MainPage({cardData }) {
    return (
      <div>
        
        <DateSelector/>
        <BasicButtons/>
        <TopSection />
        <CardList data={cardData} />
      </div>
    );
  }
  
export default MainPage;