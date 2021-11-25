import React from "react";

const Assessment = () =>{


    return(
        <div>
            <div className="row">
                <div className="col-md-6 offset-2">
                <div className="card mt-5">

                    <div class="card-header">Q1. What is the capital of India?</div>
                        <div class="card-body">
                        
                        <input type="radio" name="options" id="option1" /> India<br />
                        <input type="radio" name="options" id="option2" /> UP <br />
                        <input type="radio" name="options" id="option3" /> Delhi <br />
                        <input type="radio" name="options" id="option4" /> Bihar <br />
                        <div className="container mt-3">
                        <a href="#" class="btn btn-info ">Previous</a>
                        <a href="#" class="btn btn-info float-right">Save & Next</a>
                        </div>
                    </div>
                </div>
                </div>

             </div>   
        </div>
    );
};
export default Assessment;