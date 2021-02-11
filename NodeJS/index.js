const express=require('express');
const passport=require('passport');
const cookieSession=require('cookie-session');
require('./passport-setup');
const {mongoose}=require('./db.js');
const bodyParser = require('body-parser');
const cors=require('cors');

const app=express();
app.use(cors({origin: 'http://localhost:4200'}));


var studentController=require('./controllers/studentController.js');

app.use(bodyParser.json());

app.use(cookieSession({
    name: 'tuto-session',
    keys: ['key1', 'key2']
  }));

app.set("view engine", "ejs");

const isLoggedIn = (req, res, next) => {
    if(req.user) {
        res.redirect('/good')
    } else {
        res.render("pages/index");
    }
}

// Initializes passport and passport sessions
app.use(passport.initialize());
app.use(passport.session());

app.get('/', isLoggedIn);


// For an actual app you should configure this with an experation time, better keys, proxy and secure
app.use(cookieSession({
    name: 'tuto-session',
    keys: ['key1', 'key2']
  }))


// Example protected and unprotected routes
app.get('/failed', (req, res) => res.send('You Failed to log in!'))


// In this route you can see that if the user is logged in u can acess his info in: req.user
app.get('/good', (req,res)=> res.render("pages/profile.ejs",{name:req.user.displayName,pic:req.user.photos[0].value,email:req.user.emails[0].value}));

// Auth Routes
app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/good');
  }
);


app.get('/form', (req,res) => {
  if(true)
    res.redirect("http://localhost:4200");
});



app.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
})


app.listen(3000, ()=>{console.log('Server running on Port 3000...')});

app.use('/students', studentController);