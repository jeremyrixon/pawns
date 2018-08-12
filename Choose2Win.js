var Choose2Win = ludorum.Game.make({
    name: 'Choose2Win',
    players: ['White', 'Black'],

    constructor: function Choose2Win(activePlayer, winner) {
        ludorum.Game.call(this, activePlayer || this.players[0]);
        this.winner = winner || null;
    }
});

Choose2Win.prototype.result = function result() {
    if (this.winner) {
        return this.victory(this.winner);
    } else {
        return null;
    }
};

Choose2Win.prototype.moves = function moves() {
    if (!this.result()) {
        var result = {};
        result[this.activePlayer()] = ['win', 'pass'];
        return result;
    } else {
        return null;
    }
};

Choose2Win.prototype.next = function next(moves) {
    var activePlayer = this.activePlayer(),
        winner = moves[activePlayer] === 'win' ? activePlayer : null;
    return new Choose2Win(this.opponent(), winner);
};

Choose2Win.prototype.toString = function toString() {
    return 'Choose2Win('+ JSON.stringify(this.activePlayer()) +','+ JSON.stringify(this.winner) +')';
};

