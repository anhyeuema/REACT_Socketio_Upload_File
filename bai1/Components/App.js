import { View, Text, TouchableOpacity } from 'react-native';
import React, { Component, } from 'react';

import pickerimga from '../api/picker';
import unloadimag from '../api/upload';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            source: null,
            data: '122',  // bang null khong duoc
        };
    }

    picker() {
        pickerimga((source, data) => this.setState({
            avatarSource: source,
            data: data,
        }));
    }


    upload() {
            unloadimag([
                { name: 'info', data: 'khoapham '},
                { name : 'avatar', filename : 'avatar.png', data: this.state.data },     
            ])
            .then((resp) => {
                console.log(resp);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    render() {
        const img = this.state.avatarSource == null ? null :
            <Image 
                source={this.state.avatarSource}
                style={{ height: 200, height: 200 }}
            />
        return (
            <View style={{ flex: 1, backgroundColor: '#899BC9' }}>
                <Text>Component App </Text>
                <View style={{ flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'center' }} >
                <TouchableOpacity onPress={() => this.picker()} style={{ backgroundColor: '#60B8E7', borderWidth: 1, borderColor: '#E61A5F', justifyContent: 'center' }} >
                    <Text>show imgae picker</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.upload()} style={{ backgroundColor: '#60B8E7', borderWidth: 1, borderColor: '#E61A5F', justifyContent: 'center' }} >
                    <Text>upload</Text>
                </TouchableOpacity>
                </View>

                {img}

            </View>
        );
    }
}

