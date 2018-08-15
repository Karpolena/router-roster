import React from "react";
import {PlayerAPI} from "../constans/Player-API";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

export const FullRoster = () => (
    <div>
      <ul>
        {
          PlayerAPI.all().map(p => (
            <li key={p.number}>
              <Link to={`/roster/${p.number}`}>{p.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
)

