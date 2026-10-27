import express from 'express'



export const allStudents = (req, res) => {
    res.send('List all students');
}

export const newStudents = (req, res) => {
    res.send('Add new student');
}
export const updateStudents = (req, res) => {
    res.send('Update existing student');
}
export const deleteStudents = (req, res) => {
    res.send('Delete existing student');
}