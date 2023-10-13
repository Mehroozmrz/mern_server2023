const ProductCalculation = require("../model/ProductCalculation");

const ProductInsert = async (req, res) => {
    try {
      const { name,price,qty } = req.body;
  
      console.log(price);
      const product = new ProductCalculation({
        
        price,
        qty
      });
  
      
  
      const SavedProduct = await product.save();
      const total=price*qty;
      res.json({Total : total});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal some Error occured");
    }
  };

  module.exports=ProductInsert;