import {UserModel} from '../model/User'
const { check, validationResult } = require('express-validator');

export const Register = async(request, response): Promise<void> => {

    var errors = validationResult(request);
    if (!errors.isEmpty()) {
     return response.status(400).json({ errors: errors.array() });
     }

    var {name, email, password, configPassword} = request.body;
   
    try {
        var dataset = {name, email, password, configPassword};
    console.log(dataset);
    response.send(dataset);

        
    } catch (error) {
        throw error;
        response.status(500).json({msg: 'Internal Server Error'})
        
    }

}