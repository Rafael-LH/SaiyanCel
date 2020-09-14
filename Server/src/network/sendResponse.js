exports.sendResponse = ({ res, status, message, result, error }) => {
  const issetErrorServer = message.toString().indexOf('Error:') > -1 && true;

  const sendStatus = status || (error ? 500 : 200)
  const sendMessage = (issetErrorServer) ? 'ha ocurrido algun error, intentalo más tarde' : message || ''
  const sendResult = result

  if (issetErrorServer) console.log(error)

  res.status(sendStatus).send({
    message: sendMessage,
    result: sendResult,
  })

}