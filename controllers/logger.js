const { createLogger,transports ,format}  = require('winston')
// const { combine, timestamp, label, prettyPrint } = format;

//    --- all  user function ---

const userLogger = createLogger({
    transports:[
        new transports.File({
            filename:'users.log',
            level:'info',
              format:format.combine(format.timestamp(),format.json())
        }),
        new transports.File({
            filename:'users-error.log',
            level:'error',
            format:format.combine(format.timestamp(),format.json())
        })
    ]
})

module.exports = { userLogger}

