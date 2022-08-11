const errorHandler = (err ,req,res,next) =>{
 const statuscode =res.statuscode === 200 ? 500 : res.statuscode
 res.status(statuscode).json({
 message : err.message
})
}


export default errorHandler
