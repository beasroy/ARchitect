export const pricePredictor = async (req, res) => {
    try{
        const data = req.body;
        console.log(data);
        const response = await fetch ("http://127.0.0.1:5001/predict", {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        console.log(response);
        const pred = await response.json();
        return res.status(200).send(pred);
        
    } catch(err){
        res.status(400).json({err});
    }
}