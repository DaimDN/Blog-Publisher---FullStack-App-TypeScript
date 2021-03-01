import * as express from 'express'
import * as path from 'path'
import {UserModel} from '../model/User'
import {Homepage} from './Home'
import {Register} from './Auth'
const { check, validationResult } = require('express-validator');


export class Routes{
    private app: express.Application;
    private message : String

    constructor(app: express.Application){
        this.app = app;
        this.setDir();           
    }

    private setDir(): void{
        this.app.use(express.static('public'));
    }

    private getRoutings(): void {
        this.app.get('/', Homepage );
    }   


    private PostRoutes(): void{
       this.app.post('/register',
       check('name', 'Name is required').notEmpty(),
       check('email', 'Please include a valid email').isEmail(),
       check(
         'password',
         'Please enter a password with 6 or more characters'
       ).isLength({ min: 6 })
       , Register);

    }
    
    public getRoutes(): void {
        this.getRoutings();
        this.PostRoutes();
    }


}