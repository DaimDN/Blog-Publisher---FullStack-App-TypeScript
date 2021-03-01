const Tokenization = require('jsonwebtoken');
const config = require('config');

export const AuthMiddleware = async(request, response, next) => {
   const token = request.header('auth-token');
   if (!token) {
     return response.status(401).json({ msg: 'No token, authorization denied' });
   }
   try {
     Tokenization.verify(token, config.get('Secret'), (error, decoded) => {
       if (error) {
         return response.status(401).json({ msg: 'Token is not valid' });
       } else {
         request.user = decoded.user;
         next();
       }
     });
   } catch (err) {
     console.error('something wrong with auth middleware');
     response.status(500).json({ msg: 'Server Error' });
   }

}
