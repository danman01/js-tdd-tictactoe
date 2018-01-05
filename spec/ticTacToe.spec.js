//import q from 'q';
const server = 'http://localhost:4741/'
//
//chai.request.addPromises(q.Promise);
describe('Home Page', function() {
  it('should have a sign up button');
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
      .send({ credentials: {password: '123', password_confirmation: '123', email: 'test123@gmail.com' }})
      .end(function(err, res){
        expect(res.status).to.equal(200)
    //    let token = res.token
    //    console.log(res)
        done()
    //    //return agent
    //    //  .get('games')
    //    //  .set('Authentication authentication', token)
    //    //  .then(function (res){
    //    //    expect(res).to.have.status(200)
    //    //  })
      })
  })
})
describe('Sign in', function() {
  it('should allow you to sign in with email and password', function(done) {
    chai.request(server)
      .post('sign-in')
      .send({ credentials: {password: '123', email: 'test123@gmail.com' }})
      .end(function(err, res){
        console.log(res)
        expect(res.status).to.equal(200)
        done()
    //    let token = res.token
    //    console.log(res)
        //    done()
    //    //return agent
    //    //  .get('games')
    //    //  .set('Authentication authentication', token)
    //    //  .then(function (res){
    //    //    expect(res).to.have.status(200)
    //    //  })
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
    chai.request(server)
      .get('games')
      .end(function(err, res){
        expect(res.status).to.equal(200)  
        done()
      })
  })
  it('should have a button to retreive a single game with a GET to /games/:id');
})
