const chai=require('chai');
const task1=require('../index');
const chaiHttp=require('chai-http');

//assertion style "should"
chai.should();
chai.use(chaiHttp);
describe('tasks in api', () =>{
    describe("POST /patient/register",() => {
        it("it should post a new patient",(done) => {
            const patient={
                message:"patient id is created",
                name:"p1",
                phoneNo:"123",
            }
            chai.request(task1).post("/doctors/register").send(task1).end((err,res) =>{
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('id');
                res.body.should.have.property('message');
                res.body.should.have.property('name');
                res.body.should.have.property('email');
                done();
            });
        });
    });
})