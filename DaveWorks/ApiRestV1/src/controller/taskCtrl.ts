'use strict'
import { NextFunction, Request, Response } from 'express';
// const db = require('../db');
import db from '../database';
// const Studentmdl = require('../models/student');

const addTask = async(req : Request, res : Response) => {
    try {
        const data = req.body;
        await db.collection('task2').add(data);
        // await db.collection('task2').doc().set(data);
        res.send('Success add');
    } catch (error) {
        res.status(400).send('Cannot add student');
    }
}
export default addTask;
