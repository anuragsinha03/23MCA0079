import express from 'express';
import axios from 'axios'

const router = express.Router();
const companies = ["FLP", "AMZ", "MYN", "AZO", "SNP"]
const categories = ["Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"]

const results = []

for(let i=0; i<companies.length; i++){
    for(let j=0; j<categories.length; j++){
        axios.get(`http://20.244.56.144/test/companies/${companies[i]}/categories/${categories[i]}/products?top=10&minPrice=1&maxPrice=10000`)
    }
}

