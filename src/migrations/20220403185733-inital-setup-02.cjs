const { Sequelize, DataTypes } = require('sequelize');

const tableNames = ['user'];

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`

      CREATE TABLE IF NOT EXISTS public."user" (
          uid SERIAL PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          is_2fa_enabled BOOLEAN DEFAULT FALSE,
          two_factor_secret VARCHAR(255),                     -- Secret key for TOTP or another 2FA method
          otp VARCHAR(6),                                    -- The OTP value sent to the user
          otp_expires_at TIMESTAMP,                          -- Expiration time for the OTP
          otp_sent_at TIMESTAMP,                             -- Time when the OTP was sent
          failed_attempts INTEGER DEFAULT 0,                  -- Count of failed OTP attempts
          otp_verified BOOLEAN DEFAULT FALSE                 -- Whether the OTP was verified
      );
    `);
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.sequelize.transaction(async (transaction) => {
    //   const tablePromises = tableNames.map(async table => {
    //     await queryInterface.dropTable(table, { transaction, cascade: true });
    //   });

    //   await Promise.all(tablePromises);
    // });
  }
};
