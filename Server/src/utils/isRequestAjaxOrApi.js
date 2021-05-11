const isRequestAjaxOrApi = (req) => {
  /**
  * si no acepta un html es decir si es un Ajax request o es un XMLHttpRequest
  * quiere decir que la peticion proviene de una api el cual contrendra un JSON
  * */
  return !req.accepts('html') || req.xhr
}
module.exports = isRequestAjaxOrApi