import React, { useEffect, useState } from "react";
import "./App.css";

const Apijson = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => setData(json))
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <div className="App">
                <h2>Customer Email</h2>
                {
                    data.map((item) => {
                        return (
                            <div className="col-md-4 col-10 mx-auto" >
                                <div className="card">
                                    <img src={item.url} className="card-img-top" alt={item.url} />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </>
    )
}

export { Apijson };