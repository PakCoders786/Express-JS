import express from 'express'
import { allStudents, deleteStudents, newStudents, updateStudents } from '../controllers/student.js'

const router = express.Router();

// we destructure url using curly braces like
// we can take multiple parameters using api /:paramname
router.get('/all', allStudents);
router.post('/add',newStudents);
router.put('/update',updateStudents);
router.delete('/delete',deleteStudents);

export default router