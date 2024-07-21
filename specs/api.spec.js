const { default: axios } = require('axios');

const baseurl = 'https://jsonplaceholder.typicode.com/';

test('Getting a resource - check GET method', async () => {
  const response = await axios.get(`${baseurl}posts/1`);
  const responseData = response.data;

  expect(response.status).toBe(200);
  expect(responseData).toBeDefined();
  expect(responseData.userId).toBe(1);
  expect(responseData.id).toBe(1);
  expect(responseData.title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
  expect(responseData.body).toBe('quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto');
});

test('Creating a resource - check POST method', async () => {
  const data = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  };

  const response = await axios.post(`${baseurl}posts`, {
    title: data.title,
    body: data.body,
    userId: data.userId,
  });

  const responseData = response.data;

  expect(response.status).toBe(201);
  expect(responseData.title).toBe('foo');
  expect(responseData.body).toBe('bar');
  expect(responseData.id).toBe(101);
});

test('Updating a resource - check PUT method', async () => {
  const data = {
    id: 1,
    title: 'new foo',
    body: 'new bar',
    userId: 1,
  };

  const response = await axios.put(`${baseurl}posts/1`, {
    id: data.id,
    title: data.title,
    body: data.body,
    userId: data.userId,
  });

  const responseData = response.data;

  expect(response.status).toBe(200);
  expect(responseData.title).toBe(data.title);
  expect(responseData.body).toBe(data.body);
  expect(responseData.id).toBe(data.id);
  expect(responseData.userId).toBe(data.userId);
});

test('Patching a resource - check PATCH method', async () => {
  const data = {
    title: 'old foo',
  };

  const response = await axios.patch(`${baseurl}posts/1`, {
    id: data.id,
    title: data.title,
    body: data.body,
    userId: data.userId,
  });

  const responseData = response.data;

  expect(response.status).toBe(200);
  expect(responseData.title).toBe(data.title);
  expect(responseData.body).toBe('quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto');
  expect(responseData.id).toBe(1);
  expect(responseData.userId).toBe(1);
});

test('Deleting a resource - check DELETE method', async () => {
  const response = await axios.delete(`${baseurl}posts/1`);

  expect(response.status).toBe(200);
  expect(response.data).toStrictEqual({});
});
