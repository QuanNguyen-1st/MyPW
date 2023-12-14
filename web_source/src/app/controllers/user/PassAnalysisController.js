
const analyze = require('../../api/analyzer');
class PassAnalysisController {
  // [GET] / 
  index(req, res, next){
    // Default
    const content = [
    {
        title: "Requirement",
        content: "Basic password requirement",
        tail1: true,
    },
    {
        title: "Password Entrophy",
        content: "00.00bits",
        tail2: true,
    },
    {
        title: "Match used password",
        content: "Sometext haha",
        tail3: true,
    },
    {
        title: "Weak kwown public password",
        content: "Sometext haha",
        tail4: true,
    }];
    res.render('user/passana', {
      passanalActive : true,
      criteria: content
    })
  }
  // [POST] /
  analyze(req, res, next){
    // Do some other things




  }
}

module.exports = new PassAnalysisController;