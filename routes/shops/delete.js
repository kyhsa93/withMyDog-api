import { shops } from '../../controllers';

export default async (request, response) => {
  try {
    const { id } = request.params;

    if (id < 1) {
      return response.status(400).send('invalid id');
    }

    const { code, data } = await shops.delete({ id });

    if (!code || !data) {
      return response.status(500).send('internal server error');
    }

    return response.status(code).send(data);
  } catch (error) {
    return response.status(500).send('internal server error');
  }
};
