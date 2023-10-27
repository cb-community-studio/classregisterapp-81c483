const users = require("./users/users.service.js");
const course = require("./course/course.service.js");
const topics = require("./topics/topics.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    app.configure(users);
  app.configure(course);
  app.configure(topics);
    // ~cb-add-configure-service-name~
};
