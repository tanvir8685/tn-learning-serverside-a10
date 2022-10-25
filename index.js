const express=require('express')
const app=express();
const port=process.env.PORT||5000;
app.get('/',(req,res)=>{
    res.send('tn learning is runnig');
});
app.listen(port,()=>{
    console.log('tn-learning Server running at port ',port)
})