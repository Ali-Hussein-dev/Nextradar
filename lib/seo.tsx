/**
 * Strctured Data for Rich Results on Google. Learn more: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
 *
 *
 * Find your type here (SoftwareApp, Book...): https://developers.google.com/search/docs/appearance/structured-data/search-gallery
 *
 * Use this tool to check data is well structure: https://search.google.com/test/rich-results
 *
 *
 */

/**
 * @RECOMMENDED FOR SEO
 * It increase your chances of having a rich snippet on Google.
 *
 * Use in your app/page.tsx for software apps: It tells Google your AppName is a Software, and it has a rating of 4.8/5 from 12 reviews.
 *
 */

// use for rich snippets on Google
export function StructuredDataScript({ data }: { data: { [k: string]: any } }) {
  return (
    <script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    ></script>
  )
}