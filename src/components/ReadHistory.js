import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { Link } from "react-router-dom";
import Axios from "axios";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReadHistory = () => {
  const endpoint = process.env.CARDS;
  const api = process.env.BACKEND + "/archives";
  const [user, updateUser] = useContext(UserContext);

  const [archives, updateArchive] = useState({
    loading: true,
    readings: [],
  });

  const deleteReading = (reading) => {
    Axios.delete(
      api,
      { data: { email: user.email, reading } },
      {
        headers: { "Content-Type": "application/json" },
      }
    ).then((response) => {
      const newState = {
        ...user,
        archived: JSON.parse(user.archived).filter((i) => {
          return i !== reading;
        })
      };
      updateUser(newState);
    })
    .catch((err) => {
      console.log(JSON.stringify(err));
    });
  };

  useEffect(() => {
    if (user && user.archived) {
      const params = {
        user: user.email,
        readings: JSON.parse(user.archived),
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
  }, [user]);

  return (
    <div className="historyWrapper">
      <h1>Saved Readings</h1>
      {archives.readings && (
        <div className="histories">
          {archives.readings.map((reading) => (
            <div className="history" key={reading.id}>
              <FontAwesomeIcon
                icon={faTrashAlt}
                onClick={() => deleteReading(reading.id)}
              />
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
