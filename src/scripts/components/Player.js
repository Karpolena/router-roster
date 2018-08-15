import React from "react";
import PlayerAPI from "../constans/Player-API";
import PropTypes from "prop-types";

export const Player = (props) => {
    const player = PlayerAPI.get(
      parseInt(props.match.params.number, 10)
    )
    if (!player) {
      return <div>Sorry, but the player was not found</div>
    }
    return (
      <div>
        <h1>{player.name} (#{player.number})</h1>
        <h2>{player.position}</h2>
      </div>
  )
}

Player.propTypes = {
    match: PropTypes.array
}

