import express from 'express';
import axios from 'axios'

const router = express.Router();
const companies = ["FLP", "AMZ", "MYN", "AZO", "SNP"]
const categories = ["Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"]

const results = []

for(let i=0; i<companies.length; i++){
    for(let j=0; j<categories.length; j++){
        axios.get(`http://20.244.56.144/test/companies/${companies[i]}/categories/${categories[i]}/products?top=10&minPrice=1&maxPrice=10000`, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzExODAxODgzLCJpYXQiOjE3MTE4MDE1ODMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjgwZDEzMDJjLWQ2NWUtNDVlOS04YWNkLTdhMTkwNGRjYjg1NSIsInN1YiI6ImFudXJhYWdyazRAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIiwiY2xpZW50SUQiOiI4MGQxMzAyYy1kNjVlLTQ1ZTktOGFjZC03YTE5MDRkY2I4NTUiLCJjbGllbnRTZWNyZXQiOiJHUUtSSFVCU0ZhUnVzd3pGIiwib3duZXJOYW1lIjoiQW51cmFnIFNpbmhhIiwib3duZXJFbWFpbCI6ImFudXJhYWdyazRAZ21haWwuY29tIiwicm9sbE5vIjoiMjNNQ0EwMDc5In0.MMoWub17shELFpWjWCtyVhgLw7FAcWuOwy2zzsA8pgA`
            }
        })
        .then((res) => {
            // console.log(res.data)
            results.push(res.data)
        })
        .catch((err) => console.error(err));
    }
}


console.log(results)

export default router
