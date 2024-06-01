const verifyCompany = (req, res, next) => {
    if (req.user.role !== 'company') {
      return res.status(403).send('Access denied.');
    }
    next();
  };
  
