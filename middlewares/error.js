module.exports = (_err, _req, res, _next) => {
   res.status(500).json({
    code: 'internal_server_error', message: 'error processing request',
  });
};