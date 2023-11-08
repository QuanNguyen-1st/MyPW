class AdminFeedbackController {
    // [GET] /
    index(req, res, next) {
        res.render('feedback', {
            layout: 'main-admin',
            feedbackActive: true
        });
    }
}

module.exports = new AdminFeedbackController;