const usermodel = require("../model/usermodel.js");
const postmodel = require("../model/postModel.js");
const appID = "6514710264575f335d403811";
const axios = require("axios");
class userController {
  static getUsers = async (req, res) => {
    try {
      const usersApiUrl = "https://dummyapi.io/data/v1/user";

      const response = await axios.get(usersApiUrl, {
        headers: { "app-id": appID },
      });

      const usersData = response.data.data;
      usersData.forEach((e) => {
        const users = new usermodel({
          user_id: e.id,
          title: e.title,
          firstName: e.firstName,
          lastName: e.lastName,
          imageUrl: e.picture,
        });
        users.save();
      });
      console.log("data fetched ");
      res.send("data added successfully in the databases !");
    } catch (error) {
      console.log(error);
    }
  };

  // post users
  static postUsers = async (req, res) => {
    try {
      const userlist = await usermodel.find({});
      for (let user of userlist) {
        let user_id = user.user_id;
        const postApiUrl = `https://dummyapi.io/data/v1/user/${user_id}/post`;
        const response = await axios.get(postApiUrl, {
          headers: { "app-id": appID },
        });
        const posts = new postmodel({
          data: response.data.data,
          total: response.data.total,
          page: response.data.page,
          limit: response.data.limit,
        });
        posts.save();
      }
      res.send("post success !");
    } catch (error) {
      console.log("problem in fetching data ");
    }
  };
}

module.exports = userController;
