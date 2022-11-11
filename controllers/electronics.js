var electronics = require('../models/electronics'); 
// List of all electronics 
exports.electronics_list = async function(req, res) { 
    try{ 
        theelectronics = await electronics.find(); 
        res.send(theelectronics); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// VIEWS 
// Handle a show all view 
exports.electronics_view_all_Page = async function(req, res) { 
    try{ 
        theelectronics = await electronics.find(); 
        res.render('electronics', { title: 'electronics Search results', results: theelectronics }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// for a specific Costume. 
exports.electronics_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await electronics.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

 // Handle electronics create on POST. 
exports.electronics_create_post = async function (req, res) {
    console.log(req.body)
    let document = new electronics();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"electronics_product:"Fan", electronics_price:50, electronics_size:'large'}
    document.electronics_product = req.body.electronics_product;
    document.electronics_price = req.body.electronics_price;
    document.electronics_size = req.body.electronics_size;
   

    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle electronics delete form on DELETE.
exports.electronics_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: electronics delete DELETE ' + req.params.id);
};
// Handle electronics update form on PUT.
exports.electronics_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: electronics update PUT' + req.params.id);
};
exports.electronics_view_all_Page = async function (req, res) {
    try {
        theelectronics = await electronics.find();
        res.render('electronics', { title: 'electronics Search results', electronics_results: theelectronics });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Costume update form on PUT. 
exports.electronics_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await electronics.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.electronics_product) toUpdate.electronics_product = req.body.electronics_product; 
        if(req.body.electronics_price) toUpdate.electronics_price = req.body.electronics_price; 
        if(req.body.electronics_size) toUpdate.electronics_size = req.body.electronics_size; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
 