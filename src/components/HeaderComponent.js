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
                <nav className="navbar navbar-expand-md bg-primary">
                    <div>
                       <a href="/" className="navbar-brand text-white">Admin Dashboard</a>
                    </div>

                </nav>

            </header>
                
            </div>
        );
    }
}

export default HeaderComponent;