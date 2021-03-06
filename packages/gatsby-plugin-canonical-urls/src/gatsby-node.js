exports.pluginOptionsSchema = ({ Joi }) =>
  Joi.object({
    siteUrl: Joi.string()
      .required()
      .description(`The full URL for the site e.g. https://www.example.com`),
    stripQueryString: Joi.boolean().description(
      `Enables stripQueryString to strip query strings from paths e.g. /blog?tag=foobar becomes /blog.`
    ),
  })
