let ObjectID = require('mongodb').ObjectID;
module.exports=function(app ,db){

app.post('./notes',(request , response)=>{
    const note ={text:request.body.body , title:request.body.title};
    db.collection('notes').insert(note ,(err,result)=>{
        if (err)
        {
            response.send({'error':'an error has been accurred '});
        }
        else{
            response.send(result.ops[0]);
        }
    });
});


app.get('./notes/:id',(request,response)=>{
    const detailes ={'_id':<id id goes here></id>};
    db.collection('notes').findeone(detailes ,(err,item)=>{
        if (err)
        {
            response.send({'error':'an error has been accurred '});
        }
        else{
            response.send(item);
        }
    });
});

app.delete('./notes/:id',(request,response)=>{
    const id =request.params.id;
    const detailes ={'_id':new ObjectID(id)};
    db.collection('notes').remove(detailes ,(err,item)=>{
        if (err)
        {
            response.send({'error':'an error has been accurred '});
        }
        else{
            response.send('note'+id+'deleted!');
        }
    });
});

app.put('./notes/:id',(request,response)=>{
    const id =request.params.id;
    const detailes ={'_id':new ObjectID(id)};
    const note = {text:request.body.body , title:request.body.title};
    db.collection('notes').find(detailes ,(err,result)=>{
        if (err)
        {
            response.send({'error':'an error has been accurred '});
        }
        else{
            response.send(note);
        }
    });
});
};
