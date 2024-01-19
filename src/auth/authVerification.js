export const isAuth = (req, res, next) => {
  try {
    // req.headers token linu paro
    // session storage bata token find garne
    // chck whether its expired or not
    // if expired or not valid token then res not authenticated
    // session storage bata user find garnu paryo
    res.json({
      status: "success",
      message: "You are authorized",
    });
  } catch (error) {
    console.log(error);
  }
};
