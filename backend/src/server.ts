import {app} from './api/app';

const port = process.env.APPLICATION_PORT;

app.listen(port, () => {
  console.log('Server listening at port %d', port);
});
