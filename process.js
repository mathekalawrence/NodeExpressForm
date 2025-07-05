const express = require('express'); //imports express

const app=express();

app.use(express.urlencoded()); // creates a middleware

//fetches data
app.get('/', function(request, response, next){
    response.send(`
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

         <div class="container" style="text-align: center; background-color: green;">
        <h1><em>Larry the Developer<em></h1>
        <p>Meant for the innovators</p>

        <form method="POST" action="/">
        <div>
            <label>Username</label>
            <input type="text" name="username" id="username">
        </div>
        <div>
            <label>Email Address</label>
            <input type="text" name="email" id="email" >
        </div>
        <div>
            <label for="">Password</label>
            <input type="number" name="pwd" id="pwd">
        </div>
        
            <input type="submit" name="submit" class="btn btn-primary" value="Add"/>
      </form>

      </div>
        
        `);

}); 

app.post('/', function(request, response, next){
    response.send(request.body);
});

app.listen(2000);