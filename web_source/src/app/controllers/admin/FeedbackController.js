const feedbackModel = require('../../models/feedback');

class AdminFeedbackController {
    // [GET] /
    async index(req, res, next) {
        var feedbacks = await feedbackModel.getAllData();
        const preparedFeedbackItems = feedbacks.map(item => {
            item.stars = Array.from({ length: 5 }, (_, index) => index < item.star);
            return item;
        });
        res.render('admin/feedback', {
            layout: 'main-admin',
            feedbackActive: true,
            feedbackItems: preparedFeedbackItems
        });
    }
}

module.exports = new AdminFeedbackController;