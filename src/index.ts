import app from './app';

const port = process.env.PORT || 5000;
const server = app.listen(port);

server.on('listening', () => {
  console.log(`Application listening on Port: ${port}`);
});

server.on('close', () => {
  console.log('Application Shutting Down');
});
