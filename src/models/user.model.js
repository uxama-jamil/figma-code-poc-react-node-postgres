/**
 * Model class for "skill"
 *
 * 
 *
 * @param {Sequelize} sequelize - sequelize object
 * @param {Sequelize.DataTypes} DataTypes - sequelize datatypes
 *
 * @returns User - sequelize model for user entity
 */
export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    uid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    is_2fa_enabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    two_factor_secret: {
      type: DataTypes.STRING,
    },
    otp: {
      type: DataTypes.STRING,
    },
    otp_expires_at: {
      type: DataTypes.DATE,
    },
    otp_sent_at: {
      type: DataTypes.DATE,
    },
    failed_attempts: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    otp_verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    timestamps: false,
    tableName: 'user',
    underscored: true,
  })

  // User.associate = models => {
  //   models.User.hasMany(models.Skill, { foreignKey: 'id', targetId: 'id' });
  // };
  return User;
};
