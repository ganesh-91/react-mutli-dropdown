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
        return (
            <div className="dropdown">
                <div className="dropdown-element selected-list" >
                    {selected.map((obj) => {
                        return (
                            <span key={obj.id}>{obj.label}
                                <a href="#" className="close-classic" />
                            </span>);
                    })
                    }
                </div>
                {/*<button className="dropbtn dropdown-element" onBlur={() => { this.setState({ dropDownClicked: false }) }} onClick={() => { this.setState({ dropDownClicked: !this.state.dropDownClicked }) }}></button>*/}
                <button className="dropbtn dropdown-element" onClick={() => {
                    this.setState({ dropDownClicked: !this.state.dropDownClicked });
                }} />
                <div className={"dropdown-content " + (this.state.dropDownClicked ? "show" : "hide")}>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
                <div className="clear-both" />
            </div>

            // <div>
            //     <ButtonToolbar className="multi-select">
            //         <SplitButton bsSize="small" bsStyle="default" title={selectedList} id="split-button-caret">
            //             {this.state.multiSelect.map((day, i) => {
            //                 {/*return (<Checkbox key={day.id} value={day.value} checked={day.value} onChange={this.checkBoxOnchange.bind(this, i, !day.value)}> {day.label} </Checkbox>);*/ }
            //                 return (<div key={day.id} value={day.value} className={"dd-value " + (day.value ? "bg-color-blue" : "")} onClick={this.checkBoxOnchange.bind(this, i, !day.value)}> {day.label} </div>);
            //             })}
            //         </SplitButton>
            //     </ButtonToolbar>
            //     {/*<FormGroup className="col-md-5 col-md-offset-3">
            //     <InputGroup className="multi-select-input" bsSize="small" >
            //         <FormControl type="text" />
            //         <DropdownButton
            //             componentClass={InputGroup.Button}
            //             id="input-dropdown-addon">
            //             <MenuItem key="1">Item</MenuItem>
            //         </DropdownButton>
            //     </InputGroup>
            // </FormGroup>*/}
            // </div>
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

// render(<MultiSelectDropDown />, document.getElementById("app"));
