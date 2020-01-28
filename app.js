const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address=process.argv[2]
if(address){

    geocode(address,(error,data)=>{
        if(error){
            return console.log(error)
        }
        data && forecast(data.latitude,data.longitude,data.location,(error,data)=>{
            if(error){
                return console.log(error)
            }
            console.log(data)
        })
    })
    
}else{
    console.log('Please Enter Address')
}
