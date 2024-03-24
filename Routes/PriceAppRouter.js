// create vendor list logic
import express from "express";
import Vendor from "../models/Vendor.js";
import Customer from "../models/Customer.js";
import CustomerProduct from "../models/product.js";
import Quatation from "../models/Quatation.js";
import UserDetails from "../models/User.js";
import bcrypt from 'bcrypt';
const router = express.Router();

// create vendor list
// router.post("/", (req, res) => {
//     const { name, product, city, contact } = req.body;

// }
router.post("/createquatation", async function (req, res) {
  try {
    const { name, product, price, quantity, city, contact } = req.body;
    const quatation = await Quatation.create({
      name,
      product,
      price,
      quantity,
      city,
      contact,
    });
    if (!quatation) return res.status(400).send("Quatation not created");
    return res.status(200).send(quatation);
  } catch (error) {
    console.log(error);
  }
});

//get vendor list
router.get("/getquatation", async function (req, res) {
  try {
    const quatation = await Quatation.find();
    if (!quatation) return res.status(400).send("Vendor not found");
    return res.status(200).send(quatation);
  } catch (error) {
    console.log(error);
  }
});
//get vendor by id
router.get("/getquatationbyid/:id", async function (req, res) {
  console.log(req.params);
  const { id } = req.params;
  try {
    const quatation = await Quatation.findOne({ _id: id });
    console.log(quatation);
    if (!quatation) {
      res.status(404).send("not found");
    }
    res.status(200).send(quatation);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update vendor by ID
router.put("/updatequatationbyid/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const updates = req.body;

    const customer = await Quatation.findOneAndUpdate({ _id: id }, updates, {
      new: true,
    });

    if (!customer) {
      res.status(404).send(" not found");
    }

    res.status(200).send(customer);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.delete("/deletequatationbyid/:id", async function (req, res) {
  try {
    const { id } = req.params;

    const vendor = await Quatation.findByIdAndDelete({ _id: id });

    if (!vendor) {
      return res.status(404).send("Product not found");
    }

    res.status(200).send(vendor);
  } catch (error) {
    console.error(error);
    res.status(500).send("internal server error");
  }
});
router.post("/createcustomer", async function (req, res) {
  try {
    const { name, email, contact, city } = req.body;
    const customer = await Customer.create({ name, email, contact, city });
    if (!customer) {
      res.status(400).send("customer not created");
    }
    res.status(200).send(customer);
  } catch (error) {
    res.status(500).send("internal server error");
  }
});
router.get("/getcustomerbyid/:id", async function (req, res) {
  console.log(req.params);
  const { id } = req.params;
  try {
    const customer = await Customer.findOne({ _id: id });
    console.log(customer);
    if (!customer) {
      res.status(400).send("customer not created");
    }
    res.status(200).send(customer);
  } catch (error) {
    res.status(500).send("internal server error");
  }
});
router.get("/getcustomer", async function (req, res) {
  try {
    const customer = await Customer.find();
    if (!customer) return res.status(400).send("customer not found");
    return res.status(200).send(customer);
  } catch (error) {
    console.log(error);
  }
});
router.put("/updatecustomerbyid/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const updates = req.body;

    const customer = await Customer.findOneAndUpdate({ _id: id }, updates, {
      new: true,
    });

    if (!customer) {
      res.status(404).send("Vendor not found");
    }

    res.status(200).send(customer);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/createVendor", async function (req, res) {
  try {
    const { vendorName,Idproof,IdproofNum,city,contact } = req.body;
    const vendor = await Vendor.create({ vendorName,Idproof,IdproofNum,city,contact});
    if (!vendor) {
      res.status(400).send("vendor not created");
    }
    res.status(200).send(vendor);
  } catch (error) {
    res.status(500).send("internal server error");
  }
});
router.get("/getvendorbyid/:id", async function (req, res) {
  console.log(req.params);
  const { id } = req.params;
  try {
    const vendor = await Vendor.findOne({ _id: id });
    console.log(vendor);
    if (!vendor) {
      res.status(400).send("vendor not created");
    }
    res.status(200).send(vendor);
  } catch (error) {
    res.status(500).send("internal server error");
  }
});
router.get("/getvendor", async function (req, res) {
  try {
    const vendor = await Vendor.find();
    if (!vendor) return res.status(400).send("vendor not found");
    return res.status(200).send(vendor);
  } catch (error) {
    console.log(error);
  }
});




router.post("/createproduct", async function (req, res) {
  try {
    const { product, brand, offer, size, shopName } = req.body;
    const customerproduct = await CustomerProduct.create({
      product,
      brand,
      offer,
      size,
      shopName,
    });
    if (!customerproduct) {
      res.status(404).send("product not created");
    }
    res.status(200).send(customerproduct);
  } catch (error) {
    res.status(500).send("internal server error");
  }
});
router.get("/getproduct", async function (req, res) {
  try {
    const customerproduct = await CustomerProduct.find();
    if (!customerproduct) return res.status(400).send("customer not found");
    return res.status(200).send(customerproduct);
  } catch (error) {
    console.log(error);
  }
});
router.get("/getproductbyid/:id", async function (req, res) {
  const { id } = req.params;
  
  try {
    const customerproduct = await CustomerProduct.findOne({ _id: id });
    if (!customerproduct) return res.status(400).send("customer not found");
    return res.status(200).send(customerproduct);
  } catch (error) {
    console.log(error);
  }
});
router.put("/updateproductbyid/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const updates = req.body;

    const customerproduct = await CustomerProduct.findOneAndUpdate(
      { _id: id },
      updates,
      { new: true }
    );

    if (!customerproduct) {
      res.status(404).send("product not found");
    }

    res.status(200).send(customerproduct);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.put("/updatevendorbyid/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const updates = req.body;

    const vendor = await Vendor.findOneAndUpdate(
      { _id: id },
      updates,
      { new: true }
    );

    if (!vendor) {
      res.status(404).send("Vendor not found");
    }

    res.status(200).send(vendor);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.delete("/deleteproductbyid/:id", async function (req, res) {
  try {
    const { id } = req.params;

    const deleteProduct = await CustomerProduct.findByIdAndDelete({ _id: id });

    if (!deleteProduct) {
      return res.status(404).send("Product not found");
    }

    res.status(200).send(deleteProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send("internal server error");
  }
});

router.delete("/deletevendorbyid/:id", async function (req, res) {
  try {
    const { id } = req.params;

    const vendor = await Vendor.findByIdAndDelete({ _id: id });

    if (!vendor) {
      return res.status(404).send("vendor not found");
    }

    res.status(200).send(vendor);
  } catch (error) {
    console.error(error);
    res.status(500).send("internal server error");
  }
});





// router.post('/login',async function (req,res){
//   try {
//     const {email,password} =  req.body;
//     const loginUserdetails = await UserDetails.findOne({email:email});
//     if(loginUserdetails){
//     const passwordcompare = await UserDetails.findOne({password:password});
// if(passwordcompare){
//   res.status(200).send({success:"login successfully!"})
// }
 
//     }else{
//       res.status(404).send({error:'login not successful'})
//     }

//   } catch (error) {
//     res.status(500).send({error:'internal server error'});
    
//   }
// })

// router.post('/login', async function (req, res) {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password || email.trim() === '' || password.trim() === '') {

//       return res.status(400).send({ error: 'Email and password are required' });
//     }

//     const loginUserDetails = await UserDetails.findOne({ email: email });

//     if (loginUserDetails) {
//       // Assuming you have a hashed password stored in the database
//       const isPasswordValid = await bcrypt.compare(password, loginUserDetails.password);

//       if (isPasswordValid) {
//         console.log(loginUserDetails);
//         return res.status(200).send({ success: 'Login successfully' });
//       } else {
//         return res.status(401).send({ error: 'Invalid password' });
//       }
//     } else {
//       return res.status(404).send({ error: 'User not found' });
//     }
//   } catch (error) {
//     console.error(error);
//     return res.status(500).send({ error: 'Internal server error' });
//   }
// });


router.post("/register", async function (req, res) {
  // async function genhashpassword(password) {
  //   const salt = await bcrypt.genSalt(10);
  //   const hashedpassword = await bcrypt.hash(password, salt);
  //   return hashedpassword;
  // }
  const { email, password } = req.body;
  console.log(req.body)
  try {
  
    // const hashedpassword = await genhashpassword((password));

    // Check if the user already exists
    const existUser = await UserDetails.findOne({ email });

    if (existUser) {
      return res.status(422).send({ error: "Email already exists" });
    }

    // Create a new user
    const newUser = new UserDetails({ email, password: password });
    await newUser.save();

    res.status(200).send({msg: "Successfully registered" });
  } catch (error) {
    console.error(error);
    // res.status(500).send({ error: "Internal server error" });
    if (error.name === 'ValidationError') {
      return res.status(400).send({ error: "Validation error", details: error.message });
    } else {
      return res.status(500).send({ error: "Internal server error" });
    }
  }
});

router.post("/login", async function (req, res) {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const existUser = await UserDetails.findOne({ email });

    if (!existUser) {
      return res.status(401).send({ error: "User does not exist" });
    }

    // Compare the provided password with the stored hashed password
    // const isPasswordMatch = await bcrypt.compare(password, existUser.password);

      // Create a JWT token for authentication
      // const token = jwt.sign({ id: existUser._id }, process.env.SECRET_KEY);

     else {
      res.send({ msg: "Successful login"});

    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal server error" });
  }
});

router.post("/addcustomer", async function (req, res) {
  try {
    const { name,city,contact,email } = req.body;
    const addcustomer = await Customer.create({
      name,city,contact,email
      
    });
    if (!addcustomer) {
      res.status(404).send({error:"cannot add a custommer"});
    }
    res.status(200).send({success:"custormer successfully added"});
  } catch (error) {
    res.status(500).send({error:"internal server error"});
  }
});


// router.post('/addproduct', async function (req,res){
//   try {
//     const {product,brand,contact,offer,size,shopName}
    
//   } catch (error) {
    
//   }

// })

router.post("/addproduct", async function (req, res) {
  try {
    const { product,brand,contact,offer,size,shopName } = req.body;
    const addcustomer = await CustomerProduct.create({
      product,brand,contact,offer,size,shopName
      
    });
    if (!addcustomer) {
      res.status(404).send({error:"cannot add a product"});
    }
    res.status(200).send({success:"product successfully added"});
  } catch (error) {
    res.status(500).send({error:"internal server error"});
  }
});
router.post("/addquotation", async function (req, res) {
  try {
    const { name,product,price, quantity,city,contact } = req.body;
    const addcustomer = await CustomerProduct.create({
      name,product,price, quantity,city,contact
      
    });
    if (!addcustomer) {
      res.status(404).send({error:"cannot add a quatation"});
    }
    res.status(200).send({success:"quotation successfully added"});
  } catch (error) {
    res.status(500).send({error:"internal server error"});
  }
});


export default router;
