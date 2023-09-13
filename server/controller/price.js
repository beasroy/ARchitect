export const pricePredictor = async (req, res) => {
    try{
        const data = req.body;
        console.log(req.body);
        const response = await fetch ("http://127.0.0.1:5001/predict", {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
      
        const prediction = await response.json()
        console.log(prediction)
        return res.status(200).send(prediction)
        
    } catch(err){
        res.status(400).json({err});
    }
}