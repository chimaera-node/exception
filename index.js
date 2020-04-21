const _ = require('rubico')

const exception = {}

const make = name => (message, meta) => {
  const y = new Error(message)
  y.name = name
  if (_.exists(meta)) y.meta = meta
  return y
}

exception.ResourceNotFound = make('ResourceNotFoundException')
_.setName(exception.ResourceNotFound, 'exception.ResourceNotFound')

exception.IndexNotFound = make('IndexNotFoundException')
_.setName(exception.IndexNotFound, 'exception.IndexNotFound')

exception.AlreadyExists = make('AlreadyExistsException')
_.setName(exception.AlreadyExists, 'exception.AlreadyExists')

exception.ConnectionNotReady = make('ConnectionNotReadyException')
_.setName(exception.ConnectionNotReady, 'exception.ConnectionNotReady')

exception.MalformedQuery = make('MalformedQueryException')
_.setName(exception.MalformedQuery, 'exception.MalformedQuery')

module.exports = exception
