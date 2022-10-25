const express=require('express')
const app=express();
const cors=require('cors');
const port=process.env.PORT||5000;


app.use(cors());

const categories=require('./data/courses.json');


app.get('/',(req,res)=>{
    res.send('tn learning is runnig');
});
app.get('/courses',(req,res)=>{
    res.send(categories)
})
app.listen(port,()=>{
    console.log('tn-learning Server running at port ',port)
})