import React from "react";

export default function AddNewLicense(props) {
    if (props.isOpen) {
        return (
            <div className="add-new-license">
            <div className="add-new-license-header">
                <h1>Add New License</h1>
            </div>
            <div className="add-new-license-body">
                <div className="add-new-license-body-left">
                <div className="add-new-license-body-left-header">
                    <h2>License Name</h2>
                </div>
                <div className="add-new-license-body-left-body">
                    <input
                    type="text"
                    placeholder="Enter License Name"
                    onChange={(e) => {
                        props.setLicenseName(e.target.value);
                    }}
                    />
                </div>
                </div>
                <div className="add-new-license-body-right">
                <div className="add-new-license-body-right-header">
                    <h2>License</h2>
                </div>
                <div className="add-new-license-body-right-body">
                    <textarea
                    placeholder="Enter License"
                    onChange={(e) => {
                        props.setLicense(e.target.value);
                    }
                    }
                    />
                </div>
                </div>
            </div>
            <div className="add-new-license-footer">
                <button onClick={props.addLicense}>Add License</button>
            </div>
            </div>
        );
    } else {
        return null;
    }
}