const userModel = require('../../models/user');
const feedbackModel = require('../../models/feedback');

class FeedbackController {
    // [GET] /
    async index(req, res, next) {
        const currentUser = req.session.user.username;
        const currentUserInfo = await userModel.findUsername(currentUser);
        const currentUserFeedback = await feedbackModel.findFeedbackOfUser(currentUser);
        const {averageStar, feedbackCount  } = await feedbackModel.calculateAverageFeedbackStar();
        var currentUserFeedbackItem;
        if (currentUserFeedback != null)
        {
            currentUserFeedbackItem = currentUserFeedback.map(item => {
                item.stars = Array.from({ length: 5 }, (_, index) => index < item.star);
                return item;
            });
        }

        res.render('user/feedback', {
            feedbackActive: true,
            currentUserInfo: currentUserInfo,
            currentUserFeedbackItem: currentUserFeedbackItem,
            averageStar: averageStar,
            feedbackCount : feedbackCount ,
        });
    }
}

module.exports = new FeedbackController;