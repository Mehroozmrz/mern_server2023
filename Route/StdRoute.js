const express = require("express");
const { StudentInsert,DisplayStudent,DeleteStudent,StudentUpdate,Get_Single_Student } = require("../Controllers/StdudentController");

const router = express.Router();

router.post("/std_insert",StudentInsert);
router.get("/display",DisplayStudent);
router.delete("/delete/:id",DeleteStudent);
router.put("/update/:id",StudentUpdate);
router.get("/single_view/:id",Get_Single_Student);



module.exports=router;
