const express=require('express')
const app=express();
const cors=require('cors');
const port=process.env.PORT||5000;


app.use(cors());


const categories=require('./data/courses.json');
const dates=require('./data/date.json');


app.get('/',(req,res)=>{
    res.send('tn learning is runnig');
});
app.get('/courses',(req,res)=>{
    res.send(categories)
});
app.get('/courses/:id',(req,res)=>{
    const id=req.params.id;
    const selectedSub=categories.find(sub=>sub.course_id===id);
    res.send(selectedSub);
    console.log()
});
app.get('/courses/:id/date:id',(req,res)=>{
    const id=req.params.id;
    const selectedDate=dates.find(date=>date.course_id===id);
    res.send(selectedDate);
})
app.listen(port,()=>{
    console.log('tn-learning Server running at port ',port)
})