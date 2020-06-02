const Service = require('egg').Service;

class NewsService extends Service {
  async list(page = 1) {
    // 读配置
    // const { serverUrl, pageSize } = this.config.news;
    // use build-in http client to GET hacker-news api
    // const { data: idList } = await this.ctx.curl(`${serverUrl}/topstories.json`, { // 接口可能请求不通，导致报错500
    //   data: {
    //     orderBy: '"$key"',
    //     startAt: `"${pageSize * (page - 1)}"`,
    //     endAt: `"${pageSize * page - 1}"`,
    //   },
    //   dataType: 'json',
    // });
    // parallel GET detail
    // const newsList = await Promise.all(
    //   Object.keys(idList).map((key) => {
    //     const url = `${serverUrl}/item/${idList[key]}.json`;
    //     return this.ctx.curl(url, { dataType: 'json' });
    //   })
    // );
    // return newsList.map((res) => res.data);

    // const idList = [
    //   23386537,
    //   23386630,
    //   23376357,
    //   23373283,
    //   23384989,
    //   23387284,
    //   23381156,
    //   23385741,
    //   23375875,
    //   23384227,
    //   23385505,
    // ];

    const nl = [
      {
        by: 'alexeiz',
        descendants: 32,
        id: 23386537,
        score: 147,
        time: 1591063716,
        title: 'Guide to Python Debugging',
        type: 'story',
        url: 'https://martinheinz.dev/blog/24',
      },
      {
        by: '7d7n',
        descendants: 113,
        id: 23386630,
        score: 303,
        time: 1591064583,
        title: 'Stop Taking Regular Notes; Use a Zettelkasten Instead',
        type: 'story',
        url: 'https://eugeneyan.com/2020/04/05/note-taking-zettelkasten/',
      },
      {
        by: 'ingve',
        descendants: 29,
        id: 23376357,
        score: 141,
        time: 1590999852,
        title: 'C Internals',
        type: 'story',
        url: 'http://www.avabodh.com/cin/cin.html',
      },
      {
        by: 'todsacerdoti',
        descendants: 7,
        id: 23384989,
        score: 134,
        time: 1591051759,
        title: 'Modern Portfolio Theory: A Case Study on Turnips',
        type: 'story',
        url: 'https://www.shawenyao.com/Modern-Portfolio-Theory-a-Case-Study-on-Turnips/',
      },
      {
        by: 'rlsph',
        descendants: 74,
        id: 23381156,
        score: 258,
        time: 1591032557,
        title: 'Debian Handbook for Debian 10 Buster',
        type: 'story',
        url: 'https://debian-handbook.info/browse/stable/',
      },
    ];
    return nl;
  }
}

module.exports = NewsService;
