const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51LY1QBSIqQO61hDB1N5xIHmXGhlBCe4vcJ3XUMod7MDiwTauydAjpETHWKh2iBdJiGkiQh8C3xwt0Ya2hBuPEFNi00kEhiboPC');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.get('/',(req,res)=>{
    res.json({'msg':'HAII'})
})
app.post("/checkout", async (req, res) => {
   
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "https://kagolanumadhav.onrender.com/success",
        cancel_url: "https://kagolanumadhav.onrender.com/cancel"
    });
 
    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on port 4000!"));
