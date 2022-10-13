

const getAllTasks = (req,res)=>{
    res.send("All IOtems from the files ")
}

const createTask = (req, res)=>{
    res.json(req.body);
}

const getTask =(req,res)=>{
    res.json({id:req.params.id});
}

const updateTask = (req,res)=>{
    res.send("All IOtems from the files ")
}

const deleteTask = (req,res)=>{
    res.send("All IOtems from the files ")
}




module.exports = { getAllTasks ,createTask ,getTask ,updateTask ,deleteTask};