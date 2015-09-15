var CSDLEditorConfig = CSDLEditorConfig || {
    name : 'datasift',

    targetHelpJsonpSource : 'http://dev.datasift.com/tooltip-endpoint/tooltip/retrieve?id={target}',

    geo_box : {
        instructions : [
            'Click on the map to mark first corner of the box.',
            'Now click on the map to mark the second corner of the box.',
            'You can drag the markers around to change the box coordinates.'
        ]
    },
    geo_radius : {
        instructions : [
            'Click on the map to mark the center of the selection.',
            'Click again to set the radius.',
            'You can drag the markers around to move the center of the circle or the radius.'
        ]
    },
    geo_polygon : {
        instructions : [
            'Click on the map to mark first tip of the polygon selection.',
            'Click on the map to mark the second tip of the polygon.',
            'Click on the map to mark the third tip and close the shape.',
            'Click on the map to add new markers or drag them around. Double-click a marker to remove it.'
        ]
    },

    operators : [
        'cs',
        'contains',
        'contains_any',
        'any',
        'substr',
        'contains_near',
        'near',
        'exists',
        'in',
        'url_in',
        '==',
        '!=',
        '>',
        '>=',
        '<',
        '<=',
        'regex_partial',
        'regex_exact',
        'geo_box',
        'geo_radius',
        'geo_polygon',
        'pcre',
        'contains_phrase',
        'all',
        'contains_all',
        'wild',
        'wildcard',
	'list_in',
	'list_any'
    ],

    logical : [
        'and',
        'or'
    ],

    unary : [
        'not'
    ],

    keywords : [
        'stream',
        'tag',
        'tags',
        'return'
    ],

    punctuationControl : [
        '[keep(default)]',
        '[keep(classic)]',
        '[keep(extended)]'
    ],

    targets : [
       "interaction.link",
       "interaction.sample",
       "interaction.source",
       "interaction.title",
       "interaction.type",
       "interaction.geo",
       "interaction.content",
       "interaction.author.avatar",
       "interaction.author.id",
       "interaction.author.link",
       "interaction.author.name",
       "interaction.author.username",
       "2ch.author.name",
       "2ch.content",
       "2ch.contenttype",
       "2ch.link",
       "2ch.thread",
       "2ch.title",
       "2ch.type",
       "amazon.link",
       "amazon.thread",
       "amazon.title",
       "amazon.type",
       "amazon.author.link",
       "amazon.author.name",
       "amazon.content",
       "amazon.contenttype",
       "bitly.user.agent",
       "bitly.url_hash",
       "bitly.cname",
       "bitly.referring_url",
       "bitly.referring_domain",
       "bitly.url",
       "bitly.domain",
       "bitly.country_code",
       "bitly.geo_region",
       "bitly.geo_city",
       "bitly.geo_region_code",
       "bitly.share.hash",
       "bitly.timezone",
       "bitly.country",
       "blog.author.avatar",
       "blog.author.username",
       "blog.type",
       "blog.post.link",
       "blog.post.title",
       "blog.title",
       "blog.content",
       "blog.contenttype",
       "blog.link",
       "blog.domain",
       "blog.author.name",
       "blog.author.link",
       "board.author.link",
       "board.author.username",
       "board.content",
       "board.contenttype",
       "board.domain",
       "board.type",
       "board.link",
       "board.thread",
       "board.title",
       "board.author.location",
       "board.author.signature",
       "board.author.registered",
       "board.author.age",
       "board.author.gender",
       "board.author.avatar",
       "board.author.name",
       "dailymotion.author.link",
       "dailymotion.author.username",
       "dailymotion.category",
       "dailymotion.content",
       "dailymotion.contenttype",
       "dailymotion.duration",
       "dailymotion.tags",
       "dailymotion.thumbnail",
       "dailymotion.title",
       "dailymotion.videolink",
       "facebook.likes.count",
       "facebook.message",
       "facebook.likes.names",
       "facebook.name",
       "facebook.likes.ids",
       "facebook.og.by",
       "facebook.og.description",
       "facebook.og.length",
       "facebook.og.photos",
       "facebook.og.title",
       "facebook.og.type",
       "facebook.source",
       "facebook.to.ids",
       "facebook.to.names",
       "facebook.type",
       "facebook.og.location",
       "facebook.application",
       "facebook.author.id",
       "facebook.author.link",
       "facebook.author.name",
       "facebook.caption",
       "facebook.description",
       "facebook.author.avatar",
       "facebook.link",
       "flickr.author.name",
       "flickr.author.username",
       "flickr.content",
       "flickr.contenttype",
       "flickr.link",
       "flickr.thread",
       "flickr.title",
       "flickr.type",
       "flickr.author.link",
       "imdb.author.link",
       "imdb.author.name",
       "imdb.content",
       "imdb.contenttype",
       "imdb.link",
       "imdb.thread",
       "imdb.title",
       "imdb.type",
       "newscred.article.domain",
       "newscred.source.name",
       "newscred.video.domain",
       "newscred.source.domain",
       "newscred.article.authors",
       "newscred.article.category",
       "newscred.article.content",
       "newscred.article.title",
       "newscred.image.attribution.link",
       "newscred.image.attribution.text",
       "newscred.image.caption",
       "newscred.article.topics",
       "newscred.type",
       "newscred.source.circulation",
       "newscred.video.caption",
       "newscred.source.company_type",
       "newscred.video.category",
       "newscred.source.country",
       "newscred.video.title",
       "newscred.source.founded",
       "newscred.source.link",
       "newscred.video.topics",
       "newscred.source.media_type",
       "reddit.author.link",
       "reddit.type",
       "reddit.author.name",
       "reddit.thread",
       "reddit.content",
       "reddit.contenttype",
       "reddit.link",
       "reddit.title",
       "topix.title",
       "topix.thread",
       "topix.author.location",
       "topix.author.name",
       "topix.content",
       "topix.contenttype",
       "topix.link",
       "topix.type",
       "twitter.retweeted.place.name",
       "twitter.retweeted.place.place_type",
       "twitter.retweeted.place.url",
       "twitter.retweeted.place.attributes",
       "twitter.retweeted.source",
       "twitter.retweeted.user.description",
       "twitter.retweeted.user.follower_ratio",
       "twitter.retweeted.user.followers_count",
       "twitter.retweeted.user.friends_count",
       "twitter.retweeted.user.verified",
       "twitter.retweeted.user.id",
       "twitter.retweeted.user.lang",
       "twitter.retweeted.user.listed_count",
       "twitter.retweeted.user.location",
       "twitter.retweeted.user.name",
       "twitter.retweeted.user.profile_age",
       "twitter.retweeted.user.screen_name",
       "twitter.retweeted.user.statuses_count",
       "twitter.retweeted.id",
       "twitter.retweeted.user.time_zone",
       "twitter.retweeted.place.country",
       "twitter.retweeted.user.url",
       "twitter.retweeted.place.country_code",
       "twitter.retweeted.place.full_name",
       "twitter.retweet.text",
       "twitter.retweet.user.description",
       "twitter.retweet.count",
       "twitter.retweet.user.follower_ratio",
       "twitter.retweet.user.followers_count",
       "twitter.retweet.user.friends_count",
       "twitter.retweet.user.id",
       "twitter.retweet.user.lang",
       "twitter.retweet.user.verified",
       "twitter.retweet.user.listed_count",
       "twitter.retweet.user.location",
       "twitter.retweet.user.name",
       "twitter.retweet.user.profile_age",
       "twitter.retweet.mention_ids",
       "twitter.retweet.user.screen_name",
       "twitter.retweet.user.statuses_count",
       "twitter.retweet.user.time_zone",
       "twitter.retweet.domains",
       "twitter.retweet.links",
       "twitter.retweet.mentions",
       "twitter.retweet.user.url",
       "twitter.retweet.elapsed",
       "twitter.retweet.source",
       "twitter.source",
       "twitter.text",
       "twitter.status",
       "twitter.mention_ids",
       "twitter.domains",
       "twitter.in_reply_to_screen_name",
       "twitter.links",
       "twitter.mentions",
       "twitter.user.description",
       "twitter.user.follower_ratio",
       "twitter.user.followers_count",
       "twitter.user.verified",
       "twitter.user.friends_count",
       "twitter.user.id",
       "twitter.user.lang",
       "twitter.user.listed_count",
       "twitter.user.location",
       "twitter.user.name",
       "twitter.user.profile_age",
       "twitter.user.screen_name",
       "twitter.user.statuses_count",
       "twitter.user.time_zone",
       "twitter.user.url",
       "twitter.place.attributes.locality",
       "twitter.place.attributes.region",
       "twitter.place.attributes.street_address",
       "twitter.place.country",
       "twitter.place.country_code",
       "twitter.place.full_name",
       "twitter.place.name",
       "twitter.place.place_type",
       "twitter.place.url",
       "video.title",
       "video.content",
       "video.contenttype",
       "video.category",
       "video.author.name",
       "video.author.link",
       "video.author.avatar",
       "video.author.username",
       "video.tags",
       "video.type",
       "video.videolink",
       "video.commentslink",
       "video.duration",
       "video.thumbnail",
       "video.domain",
       "wikipedia.body",
       "wikipedia.title",
       "wikipedia.author.talk",
       "wikipedia.author.contributions",
       "wikipedia.author.username",
       "wikipedia.images",
       "wikipedia.categories",
       "wikipedia.externallinks",
       "wikipedia.ns",
       "wikipedia.namespace",
       "wikipedia.pageid",
       "wikipedia.parentid",
       "wikipedia.oldlen",
       "wikipedia.newlen",
       "wikipedia.changetype",
       "wikipedia.diff.changes.added",
       "wikipedia.diff.changes.removed",
       "youtube.author.link",
       "youtube.author.name",
       "youtube.category",
       "youtube.commentslink",
       "youtube.content",
       "youtube.contenttype",
       "youtube.duration",
       "youtube.tags",
       "youtube.thumbnail",
       "youtube.title",
       "youtube.type",
       "youtube.videolink",
       "demographic.sex",
       "demographic.status.relationship",
       "demographic.status.work",
       "demographic.likes_and_interests",
       "demographic.first_language",
       "demographic.professions",
       "demographic.location.us_state",
       "demographic.location.city",
       "demographic.services",
       "demographic.large_accounts_followed",
       "demographic.age_range.start",
       "demographic.age_range.end",
       "demographic.main_street.dressed_by",
       "demographic.main_street.eat_and_drink_at",
       "demographic.main_street.shop_at",
       "demographic.accounts.categories",
       "demographic.twitter_activity",
       "demographic.location.country",
       "demographic.type",
       "demographic.gender",
       "klout.true_reach",
       "klout.score",
       "klout.network",
       "klout.amplification",
       "klout.topics",
       "language.confidence",
       "language.tag",
       "links.meta.content_type",
       "links.meta.charset",
       "links.meta.lang",
       "links.meta.keywords",
       "links.meta.description",
       "links.meta.standout",
       "links.title",
       "links.url",
       "links.meta.newskeywords",
       "links.retweet_count",
       "links.domain",
       "links.age",
       "links.hops",
       "links.normalized_url",
       "links.code",
       "links.meta.twitter.card",
       "links.meta.twitter.image_height",
       "links.meta.twitter.site",
       "links.meta.twitter.image_width",
       "links.meta.twitter.site_id",
       "links.meta.twitter.image",
       "links.meta.twitter.creator",
       "links.meta.twitter.title",
       "links.meta.twitter.creator_id",
       "links.meta.twitter.description",
       "links.meta.twitter.url",
       "links.meta.twitter.player_stream_content_type",
       "links.meta.twitter.player_stream",
       "links.meta.twitter.player_height",
       "links.meta.twitter.player_width",
       "links.meta.twitter.player",
       "links.meta.opengraph.cafe",
       "links.meta.opengraph.hotel",
       "links.meta.opengraph.restaurant",
       "links.meta.opengraph.cause",
       "links.meta.opengraph.sports_league",
       "links.meta.opengraph.type",
       "links.meta.opengraph.public_figure",
       "links.meta.opengraph.sports_team",
       "links.meta.opengraph.title",
       "links.meta.opengraph.city",
       "links.meta.opengraph.band",
       "links.meta.opengraph.image",
       "links.meta.opengraph.non_profit",
       "links.meta.opengraph.country",
       "links.meta.opengraph.government",
       "links.meta.opengraph.url",
       "links.meta.opengraph.article",
       "links.meta.opengraph.landmark",
       "links.meta.opengraph.school",
       "links.meta.opengraph.description",
       "links.meta.opengraph.state_province",
       "links.meta.opengraph.university",
       "links.meta.opengraph.site_name",
       "links.meta.opengraph.album",
       "links.meta.opengraph.actor",
       "links.meta.opengraph.email",
       "links.meta.opengraph.book",
       "links.meta.opengraph.athlete",
       "links.meta.opengraph.phone_number",
       "links.meta.opengraph.drink",
       "links.meta.opengraph.author",
       "links.meta.opengraph.fax_number",
       "links.meta.opengraph.food",
       "links.meta.opengraph.director",
       "links.meta.opengraph.street_address",
       "links.meta.opengraph.game",
       "links.meta.opengraph.musician",
       "links.meta.opengraph.locality",
       "links.meta.opengraph.movie",
       "links.meta.opengraph.politician",
       "links.meta.opengraph.region",
       "links.meta.opengraph.product",
       "links.meta.opengraph.postal_code",
       "links.meta.opengraph.song",
       "links.meta.opengraph.activity",
       "links.meta.opengraph.tv_show",
       "links.meta.opengraph.sport",
       "links.meta.opengraph.blog",
       "links.meta.opengraph.bar",
       "links.meta.opengraph.website",
       "links.meta.opengraph.company",
       "salience.content.topics",
       "salience.title.topics",
       "salience.title.sentiment",
       "salience.content.sentiment",
       "salience.content.entities.name",
       "salience.content.entities.type",
       "salience.title.entities.name",
       "salience.title.entities.type",
       "trends.type",
       "trends.content",
       "trends.source"
    ]
};
