import {DOMAIN} from "../graphql/consstants";
import {getNews} from "../utilites/api/api";
import {parseNews} from "../hooks/parsers/parser";




const blogPostsRssXml = data => {
	let rssItemsXml = '';

	data.forEach((post,index) => {
		rssItemsXml += `
      <item turbo="true">
        <title>${post.title}</title>
		<link>${DOMAIN}.ru/news/${index+1}</link>
        <pubDate>${post.date}</pubDate>
		<author>arenda-mebeli24</author>
        <yandex:related/>
        <turbo:content>
            <![CDATA[
                <header> 
                    <h1>${post.title}</h1> 
                    <img src="${post.img}"/>
                </header> 
                ${post.description} 
            ]]>
        </turbo:content>
    </item>`;
	});

	return rssItemsXml;
};

const getRssXml = blogPosts => {
	const rssItemsXml = blogPostsRssXml(blogPosts);

	return `<?xml  version="1.0" encoding="UTF-8" ?>
  <rss xmlns:yandex="http://news.yandex.ru" xmlns:media="http://search.yahoo.com/mrss/" xmlns:turbo="http://turbo.yandex.ru" version="2.0">
    <channel>
        <title>Арендовать мебель на мероприятие в Москве</title>
        <link>${DOMAIN}.ru</link>
        <description>
            Доставка и организация мебели для мероприятий компании. 
        </description>
        <language>ru</language>
        ${rssItemsXml}
    </channel>
  </rss>`;
};

function Rss() {
	return null;
}

export const getServerSideProps = async ({ res }) => {
	const news = await getNews();

	res.setHeader('Content-Type', 'text/xml');
	res.write(getRssXml(parseNews(news.novostis.data)));
	res.end();

	return {
		props: {
			news,
		}
	};
};

export default Rss;
