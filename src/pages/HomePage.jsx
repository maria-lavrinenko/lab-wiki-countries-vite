import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const apiData = "https://ih-countries-api.herokuapp.com/countries";

  const [countries, setCountries] = useState(null);

  const fetchCountries = async () => {
    try {
      const response = await axios.get(apiData);
      setCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  if (!countries) {
    return "loading";
  }

  return (
    <>
      <div
        className="container"
        style={{ maxHeight: "90vh", overflow: "scroll" }}
      >
        <h1 style={{ fontSize: "24px" }}>
          WikiCountries: Your Guide to the World
        </h1>

        <div className="list-group">
          {countries.map((country) => {
            // console.log(countries);
            return (
              <a
                key={country.alpha3Code}
                className="list-group-item list-group-item-action"
              >
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                />
                <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HomePage;
