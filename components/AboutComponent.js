import React, {Component} from "react";
import { View, Text, FlatList } from "react-native";
import { Avatar, Card, Image, ListItem } from "react-native-elements";
import { LEADERS } from "../shared/leaders";

class About extends Component{
    //History
    History(){
        return(
        <Card>
            <Card.Divider>
                <Text style={{textAlign:"center", fontWeight:"bold", paddingBottom:10}}>Our History</Text>
                </Card.Divider>
            <Text>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</Text>
            <Text></Text>
            <Text>The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</Text>
        </Card>
        );
    }
    //Corporate Leadership
    constructor(props){
        super(props);
        this.state={
            leaders: LEADERS
        };
    }
    render(){
        return(
            <FlatList data={this.state.leaders}
            renderItem={({item})=> this.renderLeaderItem(item)}
            keyExtractor={item => item.id.toString()}/>
        );
    }
    renderLeaderItem(item){
        return(
            <ListItem>
                <Avatar source={require('./images/alberto.png')} /><ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
            </ListItem.Content>
            </ListItem>
        );
    }
}
export default About;