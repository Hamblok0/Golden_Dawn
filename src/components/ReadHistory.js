import React, { useState, useEffect } from "react";
import Axios from "axios";
import decode from "jwt-decode";

const ReadHistory = props => {
    const endpoint = "https://ds7jrtsekfc2s.cloudfront.net/";
    const api = "https://r0pamrufoj.execute-api.us-east-2.amazonaws.com/dev/archives";
    const [archives, updateArchive] = useState({
        loading: true,
        readings: []
    });

    useEffect(() => {
        const user = decode(props.user);
        const readings = JSON.parse(user.archived)
        if (user && readings) {

            const params = {
                user: user.email,
                readings
            }

            Axios.get(api, { params })
            .then(response => {
                const data = {
                    loading: false,
                    readings: response.data.Responses.Archives.map(reading => {
                        const img = `${endpoint}` + `${JSON.parse(reading.deck)[0]}` + '.png';
                        return {...reading, img};
                    })
                }
                updateArchive(data)
            })
            .catch(err => {
                console.log(`AXIOS ERR: ${err}`);
            })
        }
    }, [])

    return (
        <div className="historyWrapper">
            <h1>Saved Readings</h1>
            {archives.readings && 
                <div className="histories">
                    {archives.readings.map(reading => 
                        <div className="history" key={reading.id}>
                            <div className="previewWrapper">
                                <div className="historyPreview" style={{"backgroundImage": `url(${reading.img})`}}></div>
                            </div>
                            <div className="timestamp">
                                <p>11-11-19</p>
                                <p>3:00PM</p>
                            </div>
                        </div>
                    )}
                </div>
            } 
        </div>
    )
}

export default ReadHistory;