// import js files
import React from "react";
import { render } from "react-dom";
import "./css/style.css";

class MultiSelectDropDown extends React.Component {
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
        const divStyle = {
            minWidth: "10px",
            height: "20px",
            padding: "5px"
        };
        let selected = [];
        this.state.multiSelect.map((day) => {
            if (day.value) {
                selected.push({ label: day.label, id: day.id });
                // this.setState({selected:this.state.selected.concat(day.label,", ")});
            }
        });
        // let selectedList = (
        //     <div>
        //         {selected.map((obj) => {
        //             return (<ListGroupItem key={obj.id} bsStyle="success">{obj.label}
        //                 <i className="glyphicon glyphicon-remove action-icon" onClick={this.selectedDayClick.bind(this, obj.id)} />
        //             </ListGroupItem>);
        //         })
        //         }
        //     </div>
        // );
        let selectedList = (
            <div className="selected-options">
                {selected.map((obj) => {
                    return (
                        <span key={obj.id} onClick={this.selectedDayClick.bind(this, obj.id)} className="selected-single" >{obj.label}
                        </span>
                    );
                })
                }
            </div>
        );
        return (
            <div className="select-element">
                {selectedList}
                <span className={"arrow " + (this.state.dropDownClicked ? "active" : "")} onClick={() => {
                    this.setState({ dropDownClicked: !this.state.dropDownClicked });
                }} >&#9660;</span>
                <ul className={"sub-menu " + (this.state.dropDownClicked ? "show" : "")}>
                    {this.state.multiSelect.map((el, i) => {
                        return (
                            <li key={el.id} value={el.value} className={el.value ? "bg-color-blue" : ""} onClick={this.checkBoxOnchange.bind(this, i, !el.value)}>
                                <div className="option-list">{el.label}</div>
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
    checkBoxOnchange(index, value) {
        let dd = this.state.multiSelect.slice();
        dd[index].value = value;
        this.setState({ multiSelect: dd });
        // this.state.multiSelect.map((day)=>{
        //     if(day.value){
        //         this.setState({selected:this.state.selected.concat(dd[index].label,", ")});
        //     }
        // });
    }
}

render(<MultiSelectDropDown />, document.getElementById("app"));
