class AdminFeedbackController {
    // [GET] /
    index(req, res, next) {
        res.render('adminFeedback', {
            layout: 'main-admin',
            feedbackActive: true
        });
    }
}

module.exports = new AdminFeedbackController;