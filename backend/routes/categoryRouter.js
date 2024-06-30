const express=require('express');
const router=express.Router();

const createCategory =require("../controllers/categories/createCategories.js")
const getCategories =require("../controllers/categories/getCategories.js")

router.post('/createCategory',createCategory);
router.post('/createCategory',getCategories);