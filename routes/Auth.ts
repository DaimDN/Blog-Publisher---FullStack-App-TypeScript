const config = require('config')
import {UserModel} from '../model/User'
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



//Checking the userAuth
export const Auth = async(request, response): Promise<void> => {
    try {
        const user = await UserModel.findById(request.user.id).select('-password');
        response.json(user);
      } catch (err) {
        console.error(err.message);
        response.status(500).send('Server Error');
      }

}



// Registeration Route is all Setup
export const Register = async(request, response): Promise<void> => {

    var errors = validationResult(request);
    if (!errors.isEmpty()) {
     return response.status(400).json({ errors: errors.array() });
     }

    var {name, email, password, configPassword} = request.body;
   
    try {
        var dataset = {name, email, password, configPassword};
        let user = await UserModel.findOne({ email });
        if (user) {
          return response.status(400).json({ errors: [{ msg: 'User already exists' }] });
        }
        user = new UserModel({
            name,
            email,
            password
          });
          const salt = await bcrypt.genSalt(Number(config.get('Rounds')));
          user.password = await bcrypt.hash(password, salt);
          await user.save();
          const payload = { user: {id: user.id}};

          jwt.sign(
            payload,
            config.get('Secret'),
            { expiresIn: '1 days' },
            (err, token) => {
              if (err) throw err;
              response.json({ token });
            }
          );
                  
    } catch (error) {
        throw error;
        response.status(500).json({msg: 'Internal Server Error'})
        
    }

}


export const Login = async(request, response): Promise<void> => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    const { email, password } = request.body;
    try {
      let user = await UserModel.findOne({ email });
      if (!user) {
        return response.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return response.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
      }
      const DataPayLoad = {
        user: {
          id: user.id
        }
      };
      jwt.sign(
        DataPayLoad,
        config.get('Secret'),
        { expiresIn: '1 days' },
        (err, token) => {
          if (err) throw err;
          response.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      response.status(500).send('Server error');
    }
  

}