const jwt = require("jsonwebtoken");
require("dotenv").config();




exports.auth = (req, res, next) => {
  try {
    
    const token =
      req.cookies?.token ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication required. Please login",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4. Attach decoded data to request
    req.user = decoded; // { id, email, role }

    
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};


//check is user Owner
exports.isOwner = (req, res, next) => {
  if (req.user.role !== "OWNER") {
    return res.status(403).json({
      success: false,
      message: "Owner access only",
    });
  }
  next();
};

//check user is staff
exports.isStaff = (req, res, next) => {
  if (req.user.role !== "STAFF") {
    return res.status(403).json({
      success: false,
      message: "Staff access only",
    });
  }
  next();
};
