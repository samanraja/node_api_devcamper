// @desc     Get all bootcamps
// @route    Get /api/v1/bootcamps
// @access   Public  
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show all bootcamps'});
} 


// @desc     Get single bootcamps
// @route    GET /api/v1/bootcamps/:id
// @access   Public  
exports.getBootcamp   = (req, res, next) => {
    res
    .status(200)
    .json({ success: true, msg: 'Show bootcamp ' + req.params.id });
} 


// @desc     Create new bootcamps   
// @route    POST/api/v1/bootcamps/:id
// @access   Private  
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Create new bootcamps' });
} 

// @desc     Update bootcamps   
// @route    PUT/api/v1/bootcamps/:id
// @access   Private  
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'update all bootcamps with id ' + req.params.id  });
}

// @desc     Delete bootcamps   
// @route    DELETE/api/v1/bootcamps/:id
// @access   Private  
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'delete all bootcamps with id ' + req.params.id  });
}