

import * as joi from 'joi'

export const signupvalidation ={
    
    body: joi.object({
        name: joi.string().trim().required(),        
        email: joi.string().email().trim().required(),          
        password: joi.string().required(),   
        phone:joi.string().required(),          
        role: joi.string().required(), 
    }).required(),

}