import { saat, fake } from '@saat/core';

saat('user2', {
  times: 10,
  email: fake('internet.email'),
  posts: {
    times: 5,
    time: fake('ai.guess'),
  },
});
