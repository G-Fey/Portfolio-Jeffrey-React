import React, { Component } from 'react';
import Datajson from '../../data/data_portfolio.json'


class Menu extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <nav>
                <ul>
                    {this.props.data.map(data => (<li key={data.id}> <a href={data.lien_element}><i href={data.icone_element}></i>{data.nom_element}</a></li>)) }

                </ul>
                
            </nav>
        );
    }
}

export default Menu;