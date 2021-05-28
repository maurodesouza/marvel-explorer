import { NextApiRequest, NextApiResponse } from 'next';
import { api } from 'services/api';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name } = req.query;

  if (!name) return res.status(406).json({ error: 'Please type a hero name!' });

  try {
    const { data } = await api.get('/characters', {
      params: {
        nameStartsWith: name,
      },
    });

    res.json(data.data);
  } catch (err) {
    console.error(err);

    res
      .status(500)
      .json({ error: 'An error has occurred, try again or come back soon' });
  }
};

export default handler;
