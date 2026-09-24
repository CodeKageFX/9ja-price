// user entities

//   id
//   name,
//   email
//   password
//   location
//   created_at
//   updated_at

// food entities
//   id
//   name
//   category
//   unit
//   alternate unit
//   created_at
//   updated_at

// price entities
//   id
//   foodId
//   current_price: { amount, unit, currency, date }
//   previous_price: { amount, unit, currency, date }
//   trend: { direction, percentage_change, unit, currency, date }
//   location: { city, market, state }
//   historical_trends: [{ amount, unit, currency, date, location }]
//   created_at
//   updated_at

// market entities
//   id
//   name
//   location: { city, state, region }
//   primary_commodities: [foodId]
//   created_at
//   updated_at

// price observations entities
//   id
//   foodId
//   marketId
//   price: { amount, unit, currency, date }
//   location: { city, market, state }
//   source: { name, url }
//   status: { verified, approved, rejected }
//   observed_at
//   updated_at
    
//   apikey entities
//   id
//   userId
//   key
//   permissions: [read, write, delete]
//   created_at
//   updated_at