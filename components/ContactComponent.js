import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, Button, Icon} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';

class Contact extends Component{
    render(){
        return (
            <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
                <Card>
                    <Card.Divider>
                        <Text style={{textAlign:"center", fontWeight:"bold", paddingBottom:10}}>Contact Information</Text>
                    </Card.Divider>
                    <Text>121, Clear Water Bay Road</Text>
                    <Text>Clear Water Bay, Kowloon</Text>
                    <Text>HONG KONG</Text>
                    <Text>Tel: +852 1234 5678</Text>
                    <Text>Fax: +852 8765 4321</Text>
                    <Text>Email:confusion@food.net</Text>
                    <Button title='Send Email' buttonStyle={{ backgroundColor: '#7cc' }}
                    icon={<Icon name='envelope-o' type='font-awesome' color='white' />}
                    onPress={this.sendMail}/>
                </Card>
            </Animatable.View>
        );
    }
    sendMail() {
        MailComposer.composeAsync({
          recipients: ['haphuocdang@gmail.com'],
          subject: 'From Confusion',
          body: 'Hello my friends ...'
        });
      }
}
export default Contact;