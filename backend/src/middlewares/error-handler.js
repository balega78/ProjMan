import logger from '../logger';
export default (err, req, res, next) => {
  logger.error(
    `${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method
    } - ${req.ip}`
  )
  res.status(err.statusCode).json({
    status: 'error',
    message: err.message,
  })
}
