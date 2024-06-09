const express = require('express');
const router = express.Router();
const problemController = require('../controllers/problems.controller');

router.route('/')
    .post(problemController.createProblem)
    .get(problemController.getProblems)

router.route('/:problemId')
    .get(problemController.getProblem)
    .put(problemController.updateProblem)
    .delete(problemController.deleteProblem)

module.exports=router;