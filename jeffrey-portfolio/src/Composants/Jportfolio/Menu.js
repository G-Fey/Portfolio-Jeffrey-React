import React, { Component } from 'react';


class Menu extends Component {

    render() {

        let datas = this.props.data

        if(datas){

            return (
                <nav>
                    <ul>
                        {  
                            datas.map(data =>
                            {
                                return(
                                    <li key={data.id}> 
                                        <a href={data.lien_element}><i href={data.icone_element}></i>{data.nom_element}</a>
                                    </li>
                                );
                            })
                        }
                    </ul> 
                </nav>
            );

        }else{
            return (
                <nav>
                   
                </nav>
            );
        }
    }
}

export default Menu;