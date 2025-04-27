import express from 'express';

const reposRouter = express.Router();

reposRouter.post('/repos', async (req, res, next): Promise<any> => {
  try {
    const getReposGithub = await fetch(`https://api.github.com/user/repos`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + req.body.token,
      },
    });

    if (!getReposGithub.ok) {
      return res.status(getReposGithub.status).send({message: 'Ошибка получения репозиториев'});
    }

    const result = await getReposGithub.json();

    return res.send({result});
  } catch (error) {
    console.error('Ошибка при получении репозиториев:', error);
    return res.status(500).send({message: 'Ошибка при запросе к GitHub API'});
  }
});

export default reposRouter;