import categoryModel from "../models/categoryModel.js";

//add category

const addCategory = async(req,res) =>{
    try {
        const {name, subCategories} = req.body;
        if(!name){
            return res.json({
                success: false,
                message: "Category name is required",
            })
        }

        const categoryExists = await categoryModel.findOne({name});

        if(categoryExists){
            return res.json({
                success: false,
                message:"Category already exits",
            })
        }

        const category = new categoryModel({
            name,
            subCategories : subCategories || [],
        });

        await category.save();

        res.json({
            success: true,
            message: "category added successfully",
            category,
        })
    } catch (error) {
        console.log(error);

        res.json({success:false, message:error.message})
        
    }
}

//list categories
const listCategories = async (req,res) => {
    try{
        const categories = await categoryModel.find({}).sort({
            createdAt: -1,
        })
           res.json({
      success: true,
      categories,
    });
    }catch(error){
       res.json({
      success: false,
      message: error.message,
    });
    }
}


//delete category 
const removeCategory = async (req,res) => {
    try {
        const {id} = req.body;

        await categoryModel.findByIdAndDelete(id);

          res.json({
      success: true,
      message: "Category removed successfully",
    });
        
    } catch (error) {
            console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
    }

    
}

//add subCategory
const addSubCategory = async (req,res) => {
    try {
        const{categoryId, subCategory} = req.body;

        if(!categoryId || !subCategory){
            return res.json({
                success: false,
                message:"category and subcategory are required"
            })
        }

        const category = await categoryModel.findById(categoryId);

        if(!category){
            return res.json({
                success:false, message:"category not found",
            })
        }

        if(category.subCategories.includes(subCategory)){
            return res.json({
                success:false,
                message:"subcategory already exists"
            })

        }

        category.subCategories.push(subCategory);
        await category.save();

            res.json({
      success: true,
      message: "Subcategory added successfully",
      category,
    });

    } catch (error) {
            console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  
    }
}

export{
    addCategory,
    listCategories,
    removeCategory,
    addSubCategory,
}