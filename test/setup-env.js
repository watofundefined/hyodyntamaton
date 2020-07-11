// Make sure there are no port conflicts when instantiating server
const port = 8800 + Number(process.env.JEST_WORKER_ID)
process.env.PORT = process.env.PORT || port.toString()
