import React, {useState} from "react";

const ReadHistory = () => {
    const endpoint = "https://ds7jrtsekfc2s.cloudfront.net/t-1.png" 
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