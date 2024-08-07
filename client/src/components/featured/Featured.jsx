import React, { useState } from 'react'
import "./featured.css"
import useFetch from '../../hooks/useFetch'

export const Featured = () => {
    const cities = ["Berlin", "Madrid", "London"]
    const [url, setUrl] = useState(`hotels/countByCity?cities=${cities[0]},${cities[1]},${cities[2]}`);
    const { data, loading, error } = useFetch(url);

    if (error) {
        return <div>Something went wrong</div>
    }
    if (loading) {
        return <div>Loading......</div>
    }
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/685535.jpg?k=e2be6eed1575001863411089bf79fd4be8a1d6fc4fb68ee5c865083994a6fe96&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>{cities[0]}</h1>
                    <h2>{`${data[0]} properties`}</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/971990.jpg?k=6d52fe4a57a984e2d540e3d7a1910f8a76fda3a57708faddd74e2109c3344b5e&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>{cities[1]}</h1>
                    <h2>{`${data[1]} properties`}</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/619676.jpg?k=d6fff74c6fd1f22c63e757d3e0ed79b22ac5986625f3a4abb7564543e8ea62b5&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>{cities[2]}</h1>
                    <h2>{`${data[2]} properties`}</h2>
                </div>
            </div>
        </div>
    )
}
