import { json, urlencoded } from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as dotenv from 'dotenv';
import routes from './routes';
import logger from './middlewares/logger';
import errorHandler from './middlewares/error-handler';

const app = express();
const port = 3000;

const options = {
    origin: '*',
    optionsSuccessStatus: 200,
};

dotenv.config();
app.use(cors(options));
app.use(logger);

app.use(json({ limit: '50mb' }));
app.use(
    urlencoded({
        extended: false,
    })
);

app.use(routes);

app.use(errorHandler);

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});

export default app;
