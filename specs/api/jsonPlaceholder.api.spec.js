import { expect, test } from '@jest/globals';
import {
  getResourse, createResource, updateResource, patchResource, deleteResource,
} from '../../framework/services/apiServices';
import { baseUrlJsonPlaceHolder } from '../../framework/config/config';

test('Getting a resource - check GET method', async () => {
  const response = await getResourse(1, baseUrlJsonPlaceHolder);
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

  const response = await createResource(data, baseUrlJsonPlaceHolder);
  const responseData = response.data;

  expect(response.status).toBe(201);

  expect(responseData.title).toBe(data.title);
  expect(responseData.body).toBe(data.body);
  expect(responseData.id).toBe(101);
});

test('Updating a resource - check PUT method', async () => {
  const data = {
    id: 1,
    title: 'new foo',
    body: 'new bar',
    userId: 1,
  };

  const response = await updateResource(data, `${baseUrlJsonPlaceHolder}/1`);
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

  const response = await patchResource(data, `${baseUrlJsonPlaceHolder}/1`);
  const responseData = response.data;

  expect(response.status).toBe(200);
  expect(responseData.title).toBe(data.title);
});

test('Deleting a resource - check DELETE method', async () => {
  const response = await deleteResource(`${baseUrlJsonPlaceHolder}/1`);

  expect(response.status).toBe(200);
  expect(response.data).toStrictEqual({});
});
