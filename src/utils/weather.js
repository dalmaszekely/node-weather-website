const request = require('request')

const weather = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=957ed719b6f45eac8aeeba9259ec626b&query=' + latitude + ',' + longitude
    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, 'Currently it is ' + body.current.temperature + ' celsius degree in ' + body.location.name + ' and it is a ' + body.current.precip + '% chance of raining today. The speed of the wind is ' + body.current.wind_speed + 'km/h, which makes the temperature feel like ' + body.current.feelslike + ' celsius degree.')
        }
    })
}

module.exports = weather