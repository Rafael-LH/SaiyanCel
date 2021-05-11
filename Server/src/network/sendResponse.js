exports.sendResponse = ({ res, status, message, result }) => {
  const sendStatus = status || 200
  const sendMessage = message || ''
  const sendResult = result

  res.status(sendStatus).send({
    message: sendMessage,
    result: sendResult,
  })

}