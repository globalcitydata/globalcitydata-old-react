import React, { Component } from 'react';
import DataList from './DataList';
import Nav from './Nav';
import SearchBar from './SearchBar';
import QueryBar from './QueryBar';

import { Button } from '@material-ui/core';

function Showcase(props) {
    return (
        <section id="showcase">
            <div id="bg-image"></div>
            <div className="container">
                <h1>Global City Data</h1>
                <SearchBar />
                <QueryBar />
            </div>
        </section>
    )
}

function Purpose(props) {
    return (
        <section id="purpose" className="section">
            <div className="container">
                <h2>Our Purpose</h2>
                <p>Global City Data hosts descriptions of open access urban systems data sets and models collected and vetted by
                a network of international researchers. To learn more about the data sets and models featured on
                this site, please use the contact link at the bottom of each detail page to be put in contact with the
                owners of individual data sets and models.</p>
                <p>Interested in contributing to Global City Data? Learn more <a href="#">here.</a></p>
                <Button variant="contained" color="primary" className="btn">Datasets and Models</Button>
            </div>
        </section>
    )
}

export default class Home extends Component {
    render() {
        return (
            <div id="home">
                <Showcase />
                <main id="main">
                    <Purpose />
                    <DataList />
                </main> 
            </div>
        )
    }
}