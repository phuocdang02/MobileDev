import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Image } from 'react-native-elements';
import { LEADERS } from '../shared/leaders';

class RenderLeader extends Component{
    render(){
        const leader = this.props.leader;
        if(leader !=null){
            return(
            <Card>
                <Card.Divider><Text>Corporate Leadership</Text></Card.Divider>
                <Image source={require('./images/alberto.png')} style={{ width: '100%', height: 100, flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}></Image>
                <Text>{leader.name}</Text>
                <Text style={{margin:10}}>{leader.description}</Text>
            </Card>
        );
    }
    return (<View/>);
    }
}

class Leaderdetail extends Component{
    constructor(props){
        super(props);
        this.state ={
            leaders:LEADERS
        };
    }
    render(){
        const leaderId = parseInt(this.props.route.params.leaderId);
        return(<RenderLeader leader={this.state.leaders[leaderId]}/>);
    }
}
export default Leaderdetail;