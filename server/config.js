const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  stripe_connect_test_client_id: 'ca_ENI6Uew0asR0r3HECm9Kooke0XBjaKbf',
  stripe_test_secret_key: 'sk_test_TKDvsKDW0GYDvfrn7nkqvBE0',
  stripe_test_api_key: 'pk_test_fCuxHOHdiDZnywejJQZjGeG3',
  jwtSecret: process.env.JWT_SECRET || "sk_test_TKDvsKDW0GYDvfrn7nkqvBE0",
  mongoUri: 'mongodb://exampleUser:changeThisInfo@localhost:27017/mernproject'
}

export default config
