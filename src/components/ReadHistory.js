import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { Link } from "react-router-dom";
import Axios from "axios";
import decode from "jwt-decode";
import { format } from "date-fns";

const ReadHistory = props => {
  const endpoint = process.env.CARDS;
  const api = process.env.BACKEND + "/archives";
  const [user, setUser] = useContext(UserContext);
  const [archives, updateArchive] = useState({
    loading: true,
    readings: [],
  });

  useEffect(() => {
    const userData = decode(user);
    const readings = JSON.parse(userData.archived);
    if (userData && readings) {
      const params = {
        user: userData.email,
        readings,
      };

      Axios.get(api, { params })
        .then((response) => {
          const data = {
            loading: false,
            readings: response.data.Responses.Archives.map((reading) => {
              const img =
                `${endpoint}` + `${JSON.parse(reading.deck)[0]}` + ".png";
              const formatted = {
                date: format(reading.date, "PPP").split(",").join(" "),
                time: format(reading.date, "p"),
              };
              return { ...reading, img, formatted };
            }),
          };
          updateArchive(data);
        })
        .catch((err) => {
          console.log(`AXIOS ERR: ${err}`);
        });
    }
  }, []);

  return (
    <div className="historyWrapper">
      <h1>Saved Readings</h1>
      {archives.readings && (
        <div className="histories">
          {archives.readings.map((reading) => (
            <div className="history" key={reading.id}>
              <div className="previewWrapper">
                <Link
                  to={{
                    pathname: `/archive/${reading.id}`,
                    state: { ...reading },
                  }}
                >
                  <div
                    className="historyPreview"
                    style={{ backgroundImage: `url(${reading.img})` }}
                  ></div>
                </Link>
              </div>
              <div className="timestamp">
                <p>{reading.formatted.date}</p>
                <p>{reading.formatted.time}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReadHistory;
