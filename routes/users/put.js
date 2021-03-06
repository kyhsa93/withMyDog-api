import { users } from '../../controllers';

export default async (request, response) => {
  try {
    const { id } = request.user;
    const { email, password, name } = request.body;

    if (!email || typeof email !== 'string') {
      return response.status(400).send('invalid email');
    }

    if (!password || typeof password !== 'string') {
      return response.status(400).send('invalid password');
    }

    if (!name || typeof name !== 'string') {
      return response.status(400).send('invalid name');
    }

    const { code, data } = await users.put({ id, ...request.body });

    if (!code || !data) {
      return response.status(500).send('internal server error');
    }

    return response.status(code).send(data);
  } catch (error) {
    return response.status(500).send('internal server error');
  }
};
