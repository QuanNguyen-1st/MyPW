class FeedbackController {
    // [GET] /
    index(req, res, next) {
        res.render('feedback', {
            feedbackActive: true
        });
    }
    
}

module.exports = new FeedbackController;