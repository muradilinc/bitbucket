import express from 'express';
import cors from 'cors';
import authRouter from "./router/auth";

const app = express();
const port = 8000;


app.use(express.json());
app.use(cors());
app.use('/auth', authRouter);

const run = async () => {
    app.listen(port, () => {
        console.log('We r online port: ' + port);
    });
};

void run();