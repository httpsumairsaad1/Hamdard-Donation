const verifyNgo = (req, res, next) => {
    if (req.user.role !== 'ngo') {
      return res.status(403).send('Access denied.');
    }
    next();
  };  