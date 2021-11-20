import express from 'express';
import * as ejs from 'ejs';
import path from 'path';
import clearThumbDir from './utilities/clearThumbCache';

const app = express();
const port = 3000 || process.env.PORT;

app.engine('html', ejs.renderFile);

// Clear Thumb Dir
const thumbDir = path.join(__dirname, '..', 'images/thumb/');
clearThumbDir(thumbDir);

// Import Routes
import routes from './routes/index';
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
