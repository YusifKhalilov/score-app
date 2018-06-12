import React from 'react';
import { Players } from '../api/players';

export default class AddPlayer extends React.Component {
    handleSubmit(e) {
        let playerName = e.target.playerName.value;
        e.preventDefault();

        if (playerName) {
            Players.insert({
                name: playerName,
                score: 0
            });
            e.target.playerName.value = '';
        }
    }
    render() {
        return (
            <div className="item">
                <form className="form" onSubmit={this.handleSubmit}>
                    <input className="form__input" type="text" name="playerName" placeholder="Player name"/>
                    <button className="button">Add Player</button>
                </form>
            </div>
        )
    }
}