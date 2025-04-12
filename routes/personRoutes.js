const express = require('express');
const router = express.Router();

const Person = require('./../models/person');

router.post('/', async (req, res) => {
  try{
const data = req.body
const newPerson = new Person(data);
const response = await newPerson.save();

console.log('data saved');
res.status(200).json(response);

 }catch(err){
  console.log(err);
res.status(500).json({error:'Internal Server error'})
  }
  })

  router.get('/', async (req, res) => {
    try{
  
  const response = await Person.find();
  
  console.log('data fetched');
  res.status(200).json(response);
  
   }catch(err){
    console.log(err);
  res.status(500).json({error:'Internal Server error'})
    }
    })

    router.put('/:id', async (req, res) => {
      try{
    const PersonId = req.params.id;
    const updatePersonData = req.body;
    const response = await Person.findByIdAndUpdate(PersonId, updatePersonData,{
      new:true,
      runValidators: true,
    }

    );
    if(!response){
return res.status(404).json({error: 'person not found'});
    }
    console.log('data updated');
    res.status(200).json(response);
    
     }catch(err){
      console.log(err);
    res.status(500).json({error:'Internal Server error'})
      }
      });

      router.delete('/:id', async (req, res) => {
        try {
          const personId = req.params.id;
      
          const response = await Person.findByIdAndDelete(personId);;
      
          if (!response) {
            return res.status(404).json({ error: 'Person not found' });
          }
      
          console.log('Person deleted');
          res.status(200).json({ message: 'Person deleted successfully' });
      
        } catch (err) {
          console.error(err);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      });
      



    module.exports = router;