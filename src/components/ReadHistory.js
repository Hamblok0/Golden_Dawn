import React, {useState, useEffect} from "react";
import Axios from "axios";
import decode from "jwt-decode";

const ReadHistory = props => {
    const endpoint = process.env.CARDS;
    const api = process.env.READINGS;

    const [archives, updateArchive] = useState(undefined);

    useEffect(() => {
        const user = decode(props.user);
        const readings = JSON.parse(user.archived)
        if (user && readings) {
            
            const params = {
                user: user.email,
                readings
            }
            console.log(params)
            Axios.get(api, { params })
            .then(data => {
                console.log(`DATA: ${JSON.stringify(data)}`);
            })
            .catch(err => {
                console.log(`AXIOS ERR: ${err}`);
            })
        }
    },[archives])
    
    return (
        <div className="historyWrapper">
            <h1>Saved Readings</h1>
            <div className="histories">
                <div className="history">
                    <div className="previewWrapper">
                        <div className="historyPreview" style={{"backgroundImage": `url(${endpoint})`}}></div>
                    </div>
                    <div className="timestamp">
                        <p>11-11-19</p>
                        <p>3:00PM</p>
                    </div>
                </div>
                <div className="history">
                    <div className="previewWrapper">
                        <div className="historyPreview" style={{"backgroundImage": `url(${endpoint})`}}></div>
                    </div>
                    <div className="timestamp">
                        <p>11-11-19</p>
                        <p>3:00PM</p>
                    </div>
                </div>
                <div className="history">
                    <div className="previewWrapper">
                        <div className="historyPreview" style={{"backgroundImage": `url(${endpoint})`}}></div>
                    </div>
                    <div className="timestamp">
                        <p>11-11-19</p>
                        <p>3:00PM</p>
                    </div>
                </div>
                <div className="history">
                    <div className="previewWrapper">
                        <div className="historyPreview" style={{"backgroundImage": `url(${endpoint})`}}></div>
                    </div>
                    <div className="timestamp">
                        <p>11-11-19</p>
                        <p>3:00PM</p>
                    </div>
                </div>
                <div className="history">
                    <div className="previewWrapper">
                        <div className="historyPreview" style={{"backgroundImage": `url(${endpoint})`}}></div>
                    </div>
                    <div className="timestamp">
                        <p>11-11-19</p>
                        <p>3:00PM</p>
                    </div>
                </div>
                <div className="history">
                    <div className="previewWrapper">
                        <div className="historyPreview" style={{"backgroundImage": `url(${endpoint})`}}></div>
                    </div>
                    <div className="timestamp">
                        <p>11-11-19</p>
                        <p>3:00PM</p>
                    </div>
                </div>
                <div className="history">
                    <div className="previewWrapper">
                        <div className="historyPreview" style={{"backgroundImage": `url(${endpoint})`}}></div>
                    </div>
                    <div className="timestamp">
                        <p>11-11-19</p>
                        <p>3:00PM</p>
                    </div>
                </div>
                <div className="history">
                    <div className="previewWrapper">
                        <div className="historyPreview" style={{"backgroundImage": `url(${endpoint})`}}></div>
                    </div>
                    <div className="timestamp">
                        <p>11-11-19</p>
                        <p>3:00PM</p>
                    </div>
                </div>
                <div className="history">
                    <div className="previewWrapper">
                        <div className="historyPreview" style={{"backgroundImage": `url(${endpoint})`}}></div>
                    </div>
                    <div className="timestamp">
                        <p>11-11-19</p>
                        <p>3:00PM</p>
                    </div>
                </div>
                <div className="history">
                    <div className="previewWrapper">
                        <div className="historyPreview" style={{"backgroundImage": `url(${endpoint})`}}></div>
                    </div>
                    <div className="timestamp">
                        <p>11-11-19</p>
                        <p>3:00PM</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReadHistory;