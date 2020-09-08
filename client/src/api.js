import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:3001/api'
})

const errHandler = err => {
  console.error(err)
  if (err.response && err.response.data) {
    console.error("API response", err.response.data)
    throw err.response.data.message
  }
  throw err
}

export default {
  service: service,

  getEmployees() {
    return service
      .get('/employees')
      .then(res => res.data)
      .catch(errHandler)
  },
  getProjects() {
    return service
      .get('/projects')
      .then(res => res.data)
      .catch(errHandler)
  },

  // getCountryDetail(id) {
  //   return service
  //     .get('/countries/'+id)
  //     .then(res => res.data)
  //     .catch(errHandler)
  // },

  postEmployees(data) {
    console.log(data)
    return service
      .post('/employees', data, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(res => res.data)
      .catch(errHandler)
  },

  postProjects(data) {
    console.log(data)
    return service
      .post('/projects', data, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(res => res.data)
      .catch(errHandler)
  },

  deleteEmployee(employeeId) {
    return service
      .delete('/employees/'+employeeId)
      .then(res => res.data)
      .catch(errHandler)
  },
  deleteProject(projectId) {
    return service
      .delete('/projects/'+projectId)
      .then(res => res.data)
      .catch(errHandler)
  },

  // editCountry(countryId, body) {
  //   return service
  //     .put('/countries/'+countryId, body)
  //     .then(res => res.data)
  //     .catch(errHandler)
  // },

  // getSecret() {
  //   return service
  //     .get('/secret')
  //     .then(res => res.data)
  //     .catch(errHandler)
  // },



  // addPicture(file) {
  //   const formData = new FormData()
  //   formData.append("picture", file)
  //   return service
  //     .post('/endpoint/to/add/a/picture', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     })
  //     .then(res => res.data)
  //     .catch(errHandler)
  // },
}
