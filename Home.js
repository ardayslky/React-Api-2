import { useState } from "react";
import Axios from "axios";
import Searchof from "../Components/Searchof";

function Home() {
  const [input1Value, setInput1Value] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchNot, setSearchNot] = useState(false);
  function searchClicked() {
    let searchURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

    Axios.get(searchURL + input1Value)
      .then((item) => {
        console.log(item.data.drinks);
        if (item.data.drinks == null) {
          setSearchResults([]);
          setSearchNot(true);
        } else {
          setSearchNot(false);
          setSearchResults(item.data.drinks);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <h3>Search Coctails</h3>
      <input
        onChange={(e) => setInput1Value(e.target.value)}
        value={input1Value}
        type="text"
        name=""
        id=""
      />
      <button className="button1" onClick={searchClicked}>
        Search
      </button>
      <br />
      {searchNot && <h1>Search term not found !</h1>}
      {searchResults.map((data, index) => (
        <Searchof
          key={index}
          title={data.strDrink}
          image={data.strDrinkThumb}
        ></Searchof>
      ))}
    </div>
  );
}

export default Home;
