import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CountryDetails() {
  const [oneCountry, setOneCountry] = useState(null);
  const { alpha3Code } = useParams();

  const fetchOneCountry = async () => {
    try {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`
      );
      // console.log(response)
      setOneCountry(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOneCountry();
  }, [alpha3Code]);

  if (!oneCountry) {
    return "loading";
  }

  return (
    <>
      <div className="container">
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${oneCountry.alpha2Code.toLowerCase()}.png`}
        />
        <h1>{oneCountry.name.official}</h1>

        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
              <td>{oneCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {oneCountry.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul key={oneCountry.alpha3Code}>
                  {oneCountry.borders.map((border) => {
                    return (
                      <li key={border}>
                        <Link to={`/${border}`}>{border}</Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CountryDetails;
