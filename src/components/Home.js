import React, {Component} from 'react';
import Nav from './Nav';
import Data from './Data';

export default class Home extends Component {
    render() {
        let datas = [
            {'name': 'Fred', 'friend': true},
            {'name': 'Rafi', 'friend': false},
            {'name': 'Marco', 'friend': true},
            {'name': 'Polo', 'friend': false},
        ]

        return (
            <div>
                <Nav />
                <p>I am home.</p>
                <Data datas={datas}/>
            </div>
        )
    }
}