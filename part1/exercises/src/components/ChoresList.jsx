import React from 'react';
import classes from './ChoresList.module.css';

class ChoresList extends React.Component {
   render() {
   return (
      <div>
         <h3 className = {classes.choresHeading}>This Week's Chores</h3>
         <ul className = {classes.choresBackground}>
            <li className = {classes.choresText}>Do all of the laundry</li>
            <li className = {classes.choresText}>Get an oil change</li>
            <li className = {classes.choresText}>Buy socks</li>
            <li className = {classes.choresText}>Take a few showers</li>
         </ul>
      </div>
   )
}
}

export default ChoresList;