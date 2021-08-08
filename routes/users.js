import express from 'express'
import { v4 as uuidv4 } from 'uuid';
import {createUser,getUser, deleteUser, updateUser} from '../controllers/user'
const router = express.Router();
//all users in here are staring with users 
let users = [];

// post request
router.post('/', createUser)

//create a get request for id 
router.get('/:id', getUser)

//Delete a user
router.delete('/:id', deleteUser)

//Patch request
router.patch('/:id',updateUser)
export default router;
