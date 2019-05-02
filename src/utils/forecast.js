const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/467ef08a9283be9c4be89fee7be7ec13/'+ latitude + ',' + longitude

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature +' degrees out.  There is a ' + body.currently.precipProbability +'% chance of rain.  The high will be ' + body.daily.data[0].temperatureHigh +'.  The Low will be ' + body.daily.data[0].temperatureLow)
        }
    })
}
module.exports = forecast