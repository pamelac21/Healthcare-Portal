const router = require ("express").Router();
const Providers = require ("../models/Providers")
//Get all providers
router.get("/", async (req,res) => {
    let providers;
    providers = await Providers.find()
})
// Get one provider by ID
router.get("/:id", async (req,res) => {
    try {
        const providers = await Providers.findById(req.params.id);
        res.status(200).json(providers);
    }
    catch (err) {
        res.status(500).json(err)
    }
});
//Create Provider
router.post("/", async (req, res) => {
    const newProvider = new Providers(req.body);
    try{
        const savedProvider = await newProvider.save();
        res.status(200).json(savedProvider);
    } catch (err){
        res.status(500).json(err)
    }
})

//Update Providers



module.exports = router;