import express , { json } from 'express';

const app = express()

//----------------------------------http verbs POST----------------------------------------------------------------------

app.post('/users')

app.post('/login')

//----------------------------------http verbs GET----------------------------------------------------------------------

app.get('/users')

app.get('/users/profile')

//----------------------------------http verbs PATCH----------------------------------------------------------------------

app.patch('/users/*')

//----------------------------------http verbs DELETE----------------------------------------------------------------------

app.delete('/users/*');

export default app