let newStreamers = streamer.filter(function(propiedad) {
    return propiedad.gameMorePlayed.includes('Legend');
} )

const streamerMayorQue = newStreamers.map((legend2) => {
    return age>35 ? legend2.gameMorePlayed.toUpperCase():legend2.gameMorePlayed

} )

console.log(newStreamers);