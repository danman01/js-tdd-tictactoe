//import q from 'q';
var server = 'http://localhost:4741/'
//
//chai.request.addPromises(q.Promise);
var credentials = { credentials: {password: '123', password_confirmation: '123', email: 'test123@gmail.com' }}
var token;
describe('Home Page', function() {
  it('should have a sign up button', function(){
    var signUpButton = document.getElementById('signUpButton')
    (signUpButton.innerHTML).should.equal('Sign Up!')
  })
  it('should have a sign in button');
  // when signed in
  it('should have a sign out button');
  it('should have a change password button');
  it('should have a create new game button');
  it('should send a POST to the game api when a new game is created to /games/new');
  it('should render the TicTacToe page when the new game button is clicked');
})
describe('Sign up', function() {
  it('should allow you to sign up with email and password', function(done) {
    chai.request(server)
      .post('sign-up')
      .send( credentials )
      .end(function(err, res){
        console.log(res)
        if(res.text.indexOf('has already been taken') >= 0){
          //already signed up
          expect(res.status).to.equal(400)
        } else {
          expect(res.status).to.equal(200)
        }
        done()
      })
  })
})
describe('Sign in', function() {
  it('should allow you to sign in with email and password', function(done) {
    chai.request(server)
      .post('sign-in')
      .send( credentials )
      .end(function(err, res){
        console.log("RESPONSE \n", res)
        console.log("RESPONSE token \n", res.body.user.token)
        token = res.body.user.token
        expect(res.status).to.equal(200)
        done()
    })
  })
})
describe('TicTacToe Page', function() {
  it('should have a game board of size 3x3');
  it('should allow the first player to click a square and place an x marker');
  it('should allow the next playre to click a square and plan an o marker');
  it('should send a PATCH to the game api when a square is clicked to /games/:id');
  it('should send a PATCH to the game api when the game is over to /games/:id');
  it('should have a button to retreive all games with a GET to /games', function(done) {
    console.log("TOKEN \n", token)
    chai.request(server)
      .get('games')
      .set('Authorization', 'Token token=' + token)
      .end(function(err, res){
        expect(res.status).to.equal(200)  
        done()
      })
  })
  it('should have a button to retreive a single game with a GET to /games/:id');
})
