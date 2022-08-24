import React from "react";
// import { robots } from "./robots";

const Card = ({ name, email, id }) => {
    // const { name, email, id} = props;
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            {/* <h1>RoboFriends</h1> */}
            <div>
                <img alt='_robots_' src={`https://robohash.org/${id}50x50`} />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;

/* <h2>{props.name}</h2>
<p>{props.email}</p> */
/* <img alt='_robots_' src="https://robohash.org/art?50x50" /> */