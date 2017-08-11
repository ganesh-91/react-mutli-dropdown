// import js files
import React from "react";
import { render } from "react-dom";
import "./css/style.css";

class ReactMultiSelect extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: "",
            dropDownClicked: false,
            multiSelect: [
                {
                    id: 1,
                    label: "monday",
                    value: true
                },
                {
                    id: 2,
                    label: "tuesday",
                    value: true
                },
                {
                    id: 3,
                    label: "wednesday",
                    value: true
                },
                {
                    id: 4,
                    label: "thursday",
                    value: true
                },
                {
                    id: 5,
                    label: "friday",
                    value: true
                },
                {
                    id: 6,
                    label: "saturday",
                    value: true
                },
                {
                    id: 7,
                    label: "sunday",
                    value: true
                }
            ]
        };
    }
    render() {
        const optionsBadge = {
            color: "#000",
            backgroundColor: "#fff"
        };
        const optionsBg = {
            backgroundColor: "cornflowerblue",
            color: "#fff"
        };
        let selected = [];
        this.state.multiSelect.map((day) => {
            if (day.value) {
                selected.push({ label: day.label, id: day.id });
            }
        });
        let selectedList = (<label className="selected-options-badges-list">{
            selected.map((obj) => {
                return (
                    <span style={optionsBadge} key={obj.id} onClick={this.selectedDayClick.bind(this, obj.id)} className="selected-options-badges" >{obj.label}
                    </span>
                );
            })
        }</label>);
        return (
            <div className="multi-select" tabIndex="0" onBlur={() => {
                this.setState({ dropDownClicked: false });
            }}>
                <div className="selected-options">{selectedList}
                    <div className="arrow" onClick={() => {
                        this.setState({ dropDownClicked: !this.state.dropDownClicked });
                    }}>&#9660;</div>
                </div>
                <ul className={"sub-menu " + (this.state.dropDownClicked ? "show" : "")}>
                    {this.state.multiSelect.map((el, i) => {
                        return (
                            <li key={el.id} value={el.value}  >
                                <div className="option-list" style={el.value ? optionsBg : {}} onClick={this.checkBoxOnchange.bind(this, i, !el.value)}>{el.label}</div>
                                {/*<input id={el.label} type="checkbox" checked={el.value} value={el.value}
                                    onChange={this.checkBoxOnchange.bind(this, i, !el.value)} />
                                <label htmlFor={el.label}>{el.label}</label>*/}
                            </li>
                        );
                    })}

                </ul>
            </div>
        );
    }
    selectedDayClick(id) {
        let filteredToasts = this.state.multiSelect.slice();

        filteredToasts.map((obj) => {
            if (obj.id === id) {
                obj.value = false;
            }
        });
        this.setState({ multiSelect: filteredToasts });
    }
    checkBoxOnchange(index, value, e) {
        let dd = this.state.multiSelect.slice();
        dd[index].value = value;
        this.setState({ multiSelect: dd });
    }
}

render(<ReactMultiSelect />, document.getElementById("app"));
