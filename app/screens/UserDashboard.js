import React, { Component } from "react";
import { View, FlatList, StatusBar } from "react-native";
import { Wrapper } from "../components/Wrapper";
import ListItem from "../components/serviceList/ListItem";

import DashboardHeader from "../components/Header/DashboardHeader";

class UserDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }
    handleItem = () => {
        console.log('Item pressed');
    }

    componentWillMount() {
        this.makeRemoteRequest();
    }
    makeRemoteRequest = async () => {
        const url = 'http://iborwoman.com/api/users/workmanServices.json';
        const response = await fetch(url);
        const json = await response.json();

        this.setState({ data: json.ourservices });
    };
    render() {
        return (
            <Wrapper>
                <StatusBar translucent={false} barStyle="default" />
                <DashboardHeader
                    text="What would you like to get fixed?" />
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <ListItem
                            text={item.name}
                            onPress={this.handleItem}
                        />
                    )}
                    keyExtractor={item => item.id}
                />
            </Wrapper>

        );
    }
}

export default UserDashboard