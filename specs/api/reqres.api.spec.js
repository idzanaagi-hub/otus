import { expect, test } from '@jest/globals';
import {
  createResource, getResourse, updateResource, patchResource, deleteResource,
} from '../../framework/services/apiServices';
import { baseUrlReqres } from '../../framework/config/config';

test('Getting a user - check GET method', async () => {
  const response = await getResourse(1, `${baseUrlReqres}users`);
  const responseData = response.data.data;

  expect(response.status).toBe(200);
  expect(responseData).toBeDefined();
  expect(responseData.id).toBe(1);
  expect(responseData.email).toBe('george.bluth@reqres.in');
  expect(responseData.first_name).toBe('George');
  expect(responseData.last_name).toBe('Bluth');
  expect(responseData.avatar).toBe('https://reqres.in/img/faces/1-image.jpg');
});

test('Creating a user - check POST method', async () => {
  const data = {
    name: 'morpheus',
    job: 'leader',
  };

  const response = await createResource(data, `${baseUrlReqres}users`);
  const responseData = response.data;

  expect(response.status).toBe(201);
  expect(responseData.name).toBe(data.name);
  expect(responseData.job).toBe(data.job);
  expect(responseData.id).toBeDefined();
  expect(responseData.createdAt).toBeDefined();
});

test('Updating a user - check PUT method', async () => {
  const data = {
    name: 'morpheus',
    job: 'zion resident',
  };

  const response = await updateResource(data, `${baseUrlReqres}users/6`);
  const responseData = response.data;

  expect(response.status).toBe(200);
  expect(responseData.name).toBe(data.name);
  expect(responseData.job).toBe(data.job);
  expect(responseData.updatedAt).toBeDefined();
});

test('Patching a user - check PATCH method', async () => {
  const data = {
    name: 'morpheus',
  };

  const response = await patchResource(data, `${baseUrlReqres}users/6`);
  const responseData = response.data;

  expect(response.status).toBe(200);
  expect(responseData.name).toBe(data.name);
  expect(responseData.updatedAt).toBeDefined();
});

test('Deleting a user - check DELETE method', async () => {
  const response = await deleteResource(`${baseUrlReqres}users/6`);

  expect(response.status).toBe(204);
  expect(response.data).toStrictEqual('');
});
