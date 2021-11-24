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
                <nav clasName="navbar navbar-expand-md navbar-dark bg-primary">
                    <div>
                       <a href="/" className="navbar-brand">Admin Dashboard</a>
                    </div>

                </nav>

            </header>
                
            </div>
        );
    }
}

export default HeaderComponent;