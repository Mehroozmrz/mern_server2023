const Student = require("../model/Student");

const StudentInsert = async (req, res) => {
  try {
    const { name, phone, email, address } = req.body;

    const student = new Student({
      name,
      phone,
      email,
      address,
    });

    let CheckEmail = await Student.findOne({ email });
    if (CheckEmail) {
      return res.status(400).json({ error: "email already exist" });
    }

    const SavedStudent = await student.save();
    res.send(SavedStudent);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal some Error occured");
  }
};

const DisplayStudent = async (req, res) => {
  try {
    const student = await Student.find();
    res.json(student);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal some Error occured");
  }
};

const DeleteStudent = async (req, res) => {
  try {
    let student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).send("Not Found");
    }
    student = await Student.findByIdAndDelete(req.params.id);
    res.json({ Success: "Student deleted successfully", student: student });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Some Error ouccured");
  }
};


const StudentUpdate =  async (req,res)=>{
  const { name, phone, email, address } = req.body;
  try{
      const newStudent = {};
      if (name) { newStudent.name = name };
      if (phone) { newStudent.phone = phone };
      if (email) { newStudent.email = email };
      if (address) { newStudent.address = address };

      let student = await Student.findById(req.params.id);
      if (!student) {
          return res.status(404).send("Not Found");
      }

      student = await Student.findByIdAndUpdate(req.params.id,{
      $set: newStudent }, { new: true })
      res.json({ student});
  }
  catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Some Error occured");
  }
}




const Get_Single_Student = async (req,res) => {
  try{
      const student = await Student.findById(req.params.id);
      if (!student) {
          res.status(404).send("Student Not Found");
      }
      res.json(student)
  }
  catch(error){
      console.error(error.message);
      res.status(500).send("Internal some error occured");
  }
}





const Get_Single_Student_Field = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      res.status(404).send("Student Not Found");
    } else {
      const specificField1 = student.name; // Replace 'fieldName' with the actual field name
      const specificField2 = student.email; // Replace 'fieldName' with the actual field name

      const responseObj = {
        field1: specificField1,
        field2: specificField2,
      };

      // Send the specific field as the response
      res.json(responseObj);
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal some error occured");
  }
};

module.exports = { StudentInsert, DisplayStudent,DeleteStudent,StudentUpdate,Get_Single_Student };









