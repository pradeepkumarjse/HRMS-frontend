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
                
                <div className="text-center bg-primary">
            
                        <h3 className="p-3 text-white">Employee Management Application</h3>

                </div>

            </div>
        );
    }
}

export default HeaderComponent;