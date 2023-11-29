class FeedbackController {
    // [GET] /
    index(req, res, next) {
        res.render('user/feedback', {
            feedbackActive: true
        });
    }
    
}

module.exports = new FeedbackController;