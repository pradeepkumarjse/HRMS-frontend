import React, { Component } from 'react';


class HeaderComponent extends Component {
     
    constructor(props){
        super(props)

        this.state={

        }

    } 

    render() {
        return (
            <div>
            <header>
                <nav clasName="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                       <a href="/" className="navbar-brand"> Question Console</a>
                    </div>

                </nav>

            </header>
                
            </div>
        );
    }
}

export default HeaderComponent;