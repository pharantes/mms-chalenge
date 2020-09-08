const express = require('express');
const Employee = require('../models/Employee');
const Project = require('../models/Project');
const router = express.Router();

// Route to get all employees
router.get('/employees', (req, res, next) => {
  Employee.find()
    .then(employees => {
      res.json(employees);
    })
    .catch(err => next(err))
});

// Route to get all projects
router.get('/projects', (req, res, next) => {
  Project.find()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => next(err))
});

// Route to get one employee
router.get('/:id', (req, res, next) => {
  Employee.findById(req.params.id)
    .populate('_supervisor', 'supervisor') // Just populate the username and the _id (default) of the creator
    .then(employee => {
      res.json(employee);
    })
    .catch(err => next(err))
});

// Route to get one project
router.get('/:id', (req, res, next) => {
  Project.findById(req.params.id)
    .populate('_supervisor', 'supervisor') // Just populate the username and the _id (default) of the creator
    .then(project => {
      res.json(project);
    })
    .catch(err => next(err))
});

// Route to add a employee
router.post('/employees', (req, res, next) => {
  console.log(req.body)
  Employee.create({
    first_name: req.body.first_name,
    second_name: req.body.second_name,
    role: req.body.role
  })
    .then(employee => {
      res.json({
        success: true,
        employee
      });
    })
    .catch(err => next(err))
});
// Route to add a project
router.post('/projects', (req, res, next) => {
  console.log(req.body)
  Project.create({
    name: req.body.name,
    start_date: req.body.start_date,
    time_slack: req.body.time_slack,
    supervisor: req.body.supervisor
  })
    .then(project => {
      res.json({
        success: true,
        project
      });
    })
    .catch(err => next(err))
});

// The route is DELETE /api/employees/:id
router.delete('/employees/:id', (req,res,next)=>{
  Employee.findByIdAndDelete(req.params.id)
    .then(employee => {
      res.json({
        message: "The employee was deleted",
        employee: employee // The deleted employee is sent
      })
    })
    .catch(err => next(err))
})

// The route is DELETE /api/projects/:id
router.delete('/projects/:id', (req,res,next)=>{
  Project.findByIdAndDelete(req.params.id)
    .then(project => {
      res.json({
        message: "The project was deleted",
        project: project // The deleted project is sent
      })
    })
    .catch(err => next(err))
})
// // The route is PUT /api/countries/:id
// router.put('/:id', (req,res,next)=>{
//   Country.findByIdAndUpdate(req.params.id, {
//     name: req.body.name,
//     description: req.body.description,
//     capitals: req.body.capitals,
//     area: req.body.area,
//   }, { new: true }) // To access the updated country (and not the old country)
//     .then(country => {
//       res.json({
//         message: "The country has been updated",
//         country: country
//       })
//     })
//     .catch(err => next(err))
// })

module.exports = router;
