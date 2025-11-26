const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // parses incoming JSON

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Spidey@143",
  database: "expense_db",
});

db.connect((err) => {
  if (err) {
    console.error("DB connection failed:", err);
    process.exit(1);
  }
  console.log("MySQL connected");
});

// Create (POST)
app.post("/api/expenses", (req, res) => {
  const { amount, category, description, expense_date } = req.body;

  if (!amount || !category || !expense_date) {
    return res
      .status(400)
      .json({ error: "amount, category, and expense_date required" });
  }

  const sql =
    "INSERT INTO expenses (amount, category, description, expense_date) VALUES (?, ?, ?, ?)";
  db.query(sql, [amount, category, description || null, expense_date], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ message: "Expense added", id: result.insertId });
  });
});

//Read all expenses 
app.get("/api/expenses",(req,res)=>{
    const sql="SELECT * FROM expenses ORDER BY expense_date DESC,id DESC";
    db.query(sql,(err,result)=>{
        if(err) return res.status(500).json(err);
        res.json(result);
    });
});

//Read one expense
app.get("/api/expenses/:id",(req,res)=>{
    const sql="SELECT * FROM expenses WHERE id=? ";
    db.query(sql,[req.params.id],(err,rows)=>{
        if(err) return res.status(500).json(err);
        if(rows.length===0) return res.status(404).json({error:"Not Found"});
        res.json(rows[0]);
    });
});
//update an expense
app.put("/api/expenses/:id",(req,res)=>{
    const{amount,category,description,expense_date}=req.body;
    const sql ="UPDATE expenses SET amount =?,category=?,description=?,expense_date=? WHERE id=?";
    db.query(sql,[amount,category,description||null,expense_date,req.params.id],(err,result)=>{
        if(err) return res.status(500).json(err);
        if(result.affectedRows===0) return res.status(404).json({error:"Not found"});
        res.json({message:"Expense Updates"});
    });

});
//delete an expense
app.delete("/api/expenses/:id",(req,res)=>{
    const sql="DELETE FROM expenses WHERE id=?";
    db.query(sql,[req.params.id],(err,result)=>{
        if(err) return res.status(500).json(err);
        if(result.affectedRows===0) return res.status(404).json({error:"Not found"});
        res.json({message:"Expense deleted!"});
    });
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running at http://localhost:${PORT}`));
