import React, { Component } from 'react';


class HeaderComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }

    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md bg-primary">
                        <div className="container-fluid">

                            <a href="/" className="navbar-brand text-white">HRMS Dashboard</a>

                            <div class="d-flex">
                                <button class="btn btn-success">SignIn</button>
                                <button class="btn btn-success ml-2">SignUp</button>
                            </div>
                        </div>

                    </nav>

                </header>

            </div>
        );
    }
}

export default HeaderComponent;