const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'Hi Egg!';
  }
}

module.exports = HomeController;
