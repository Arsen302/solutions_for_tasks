import users from './users_followers_10k_int_id.json' assert { type: 'json' };

const sortedUsers = users.sort((user_1, user_2) =>
  user_1.follows.length > user_2.follows.length ? -1 : 1
);

console.log(
  'MPU :>> ',
  sortedUsers[0],
  'Amount of followers =',
  sortedUsers[0].follows.length
);
