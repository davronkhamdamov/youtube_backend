import Users from './user_models.js';
import Videos from './videos.js'

Users.hasMany(Videos, {
    foreignKey: "userId",
    onDelete: "CASCADE"
})
Videos.belongsTo(Users)

export { Videos, Users }