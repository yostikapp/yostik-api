const bookshelf = require('../config/bookshelf');
const Game = require('./Game');
const Platform = require('./Platform');

module.exports = bookshelf.Model.extend({
  tableName: 'watchlist',
  hasTimestamps: true,
  game: function() {
    return this.belongsTo(Game);
  },
  platform: function() {
    return this.belongsTo(Platform);
  }
});
