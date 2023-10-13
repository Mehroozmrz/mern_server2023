// import express from 'express';
// or
const express = require("express");
const StudentSchema = require("./model/Student");
const connectToMongo = require("./db");
const Task = require("./Task");
const Task2 = require("./Task2");
const EmployeeSchema = require("./model/Employee");
const app = express();
const port = 3002;
app.use(express.json());


const studentRoute=require('./Route/StdRoute')
const ProductRoute=require('./Route/ProductRoute')


connectToMongo();


Task();
Task2(1,2);

const book = [
  { bookname: "harry potter", author: "xyz", price: 2000, year: 2000 },
  { bookname: "harry potter2", author: "xyz bvb", price: 2000, year: 2000 },
];

app.use('/api/student',studentRoute);
app.use('/api/product',ProductRoute);









//INSERT
app.post("/emp_insert", async (req, res) => {
  try {
    const { name, age, email, role } = req.body;

    const datas = await new EmployeeSchema({
      name,
      age,
      email,
      role
    });
    const savedData = await datas.save();
    res.send(savedData);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal some Error occured");
  }
});

//INSERT
app.post("/insert", async (req, res) => {
  try {
    const { name,age,email,role} = req.body;

    const datas = await new StudentSchema({
      name:name,
      email:email,
      phone:phone,
      address:address,
    });
    const savedData = await datas.save();
    res.send(savedData);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal some Error occured");
  }
});








// View
app.get("/view",async(req,res)=>{
  try {
    const student = await StudentSchema.find();
    res.json(student)
}
catch(error){
    console.error(error.message);
    res.status(500).send("Internal some Error occured");
}
})


// Delete
app.delete('/api/delete/:id',async (req, res)=> {
  try{
      let student = await StudentSchema.findById(req.params.id);
      if (!student) {
          return res.status(404).send("Not Found");
      }
      student = await StudentSchema.findByIdAndDelete(req.params.id)
      res.json({ "Success": "Student deleted successfully", student: student });
  }
  catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Some Error ouccured");
  }
})



//Update

app.put('/api/update/:id',async (req,res)=>{
  // const errors = validationResult(req);

  const { name, phone, email, address } = req.body;
  try{
      const newStudent = {};
      if (name) { newStudent.name = name };
      if (phone) { newStudent.phone = phone };
      if (email) { newStudent.email = email };
      if (address) { newStudent.address = address };

      let student = await StudentSchema.findById(req.params.id);
      if (!student) {
          return res.status(404).send("Not Found");
      }

      student = await StudentSchema.findByIdAndUpdate(req.params.id,{
      $set: newStudent }, { new: true })
      res.json({ student});

  }
  catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Some Error occured");
  }
})

app.get("/book", (req, res) => {
  res.send(book);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
