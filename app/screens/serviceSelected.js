import React, { Component } from "react";
import { View, Text, Button, StatusBar, TouchableHighlight } from "react-native";
import { Wrapper } from "../components/Wrapper";
import ServiceScreenHeader from "../components/Header/ServiceScreenHeader";
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from "react-native-simple-radio-button";
import DateTimePicker from "react-native-modal-datetime-picker";

import t from 'tcomb-form-native';

const Form = t.form.Form;
const User = t.struct({
    email: t.String,
    username: t.String,
    //servdate: t.String,

});
const DateTime = t.struct({
    servdate: t.String,
});
const ServiceTime = t.struct({
    servtime: t.String,
});
const options = {
    fields: {
        username: {
            multiline: true,
            placeholder: 'Site Address',
            label: 'Service Address',
            error: 'Your address is required',
            stylesheet: {
                ...Form.stylesheet,
                textbox: {
                    ...Form.stylesheet.textbox,
                    normal: {
                        ...Form.stylesheet.textbox.normal,
                        height: 45,
                    },
                    error: {
                        ...Form.stylesheet.textbox.error,
                        height: 45,
                    }
                }
            }
        },
        servdate: {
            placeholder: 'dd/mm/yyyy',
            label: 'Service Date',
            attrs: {
                onPress: () => {
                    this._showDatePicker;
                }
            }
        },
        servtime: {
            placeholder: 'HH:mm:ss',
            label: 'Service Time',
        },
        email: {
            placeholder: 'Describe the problem',
            label: 'About Service',
            error: 'This field is required',
            multiline: true,
            stylesheet: {
                ...Form.stylesheet,
                textbox: {
                    ...Form.stylesheet.textbox,
                    normal: {
                        ...Form.stylesheet.textbox.normal,
                        height: 45,
                    },
                    error: {
                        ...Form.stylesheet.textbox.error,
                        height: 45,
                    }
                }
            }
        },

    },
}
const projectType = [
    { label: 'New project', value: 0 },
    { label: 'Repair', value: 1 }
];
const paymentCharge = [
    { label: 'Call out charge', value: 1 },
    { label: 'Subscription per year', value: 0 }
];
class serviceSelected extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDatePickerVisible: false,
            isdate: '',
        }
    }
    _showDatePicker = () => this.setState({ isDatePickerVisible: true });
    _hideDatePicker = () => this.setState({ isDatePickerVisible: false });
    _datePicked = (date) => {
        console.log('Date picked is:', date);
        this._hideDatePicker();
    }
    handleProceed = () => {
        console.log('Proceed pressed');
    }
    render() {
        return (
            <Wrapper>
                <ServiceScreenHeader />
                <View style={checkB.checkbox}>
                    <View >
                        <RadioForm
                            radio_props={projectType}
                            initial={0}
                            onPress={(value) => { this.setState({ value: value }) }}
                            formHorizontal={true}
                            labelHorizontal={true}
                            radioStyle={{ paddingRight: 45, height: 10 }}
                            buttonColor={'#ff6600'}
                            buttonSize={5}
                        />
                    </View>
                    <View>
                        <Form
                            ref="Form"
                            type={User}
                            options={options}
                        />
                        <View style={checkB.datetime}>
                            <Form
                                type={DateTime}
                                options={options}
                            />
                            <Form
                                type={ServiceTime}
                                options={options}
                            />
                        </View>
                        <DateTimePicker
                            isVisible={this.state.isDatePickerVisible}
                            onConfirm={this._datePicked}
                            onCancel={this._hideDatePicker}
                            mode='date'
                        />
                    </View>
                    <View>
                        <RadioForm
                            radio_props={paymentCharge}
                            radioStyle={{ paddingRight: 5, height: 10 }}
                            buttonSize={5}
                            formHorizontal={true}
                            labelHorizontal={true}
                            onPress={(value) => { this.setState({ value: value }) }}
                        />
                    </View>
                    <TouchableHighlight
                        style={checkB.btn}
                        underlayColor={'#ff6600'}
                        onPress={this.handleProceed}
                    >
                        <Text style={checkB.text}>Proceed</Text>
                    </TouchableHighlight>
                </View>
            </Wrapper>
        );
    }
}
const checkB = {
    checkbox: {
        width: '90%',
        paddingHorizontal: 10,


    },
    datetime: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn: {
        backgroundColor: '#ff6600',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 20,
    },
    text: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '600',
    }
}
export default serviceSelected;