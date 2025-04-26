import express, { Request, Response, NextFunction } from 'express';

const authRouter = express.Router();

authRouter.get('/github', async (req, res, next): Promise<any> => {
  try {
    const response = await fetch(
      'https://github.com/login/oauth/access_token?client_id=Ov23li7YXDx5nIj0rXwa&client_secret=d555790a073fdcfa4c6e3dcfabe56aca131eb3e9&code=' +
      req.query.code,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
      },
    );
    const data = await response.json();
    const token = data.access_token;

    if (!token) {
      return res.status(400).send({error: 'Github login is wrong!'});
    }

    const getUserGithub = await fetch('https://api.github.com/user', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    const profile = await getUserGithub.json();
    return res.send({profile});
  } catch (error) {
    return next(error);
  }
});

export default authRouter;