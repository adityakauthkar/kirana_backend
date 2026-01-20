const express = require('express');
const cors = require('cors');
const  connectDB = require('./config/database');
require('dotenv').config();

const userRoute = require('./routes/authRoute');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
connectDB();





app.use('/api/v1/user' , userRoute) ;

app.get('/' , (req , res)=>{
    res.send("Server running ... ");
})
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




