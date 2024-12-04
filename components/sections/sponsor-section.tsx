import { AdStats } from "@/components/ad-stats"

//======================================
export function SponsorSection() {
  return (
    <section className="prose dark:prose-invert prose-zinc">
      <h2>Get in touch</h2>
      <p>
        By email at{" "}
        <a href="mailto:sponsor@nextradar.dev">sponsor@nextradar.dev</a> Or fill
        Contact form <a href="https://app.rapidforms.co/p/1d0ca1">here</a>
      </p>
      <h2>Stats</h2>
      <p>
        The following stats are for the last 90 days, it is updated every 12
        hours. A live preview of the stats can be shared upon request.
      </p>
      <AdStats />
      <h2>Testimonials</h2>
      <blockquote>
        Nice one, https://nextradar.dev is pretty cool - Seif Ghezala,
        co-founder of Tinloof
      </blockquote>
      <blockquote>
        Great idea! I would love to sign up for a newsletter or roundup of new
        additions. - Reddit user
      </blockquote>
      <blockquote>
        Wow! Thank you so much. 😍 This website has pretty good resources links
        along with a job section and OSS project resources as well! 🎉 - Reddit
        user
      </blockquote>
      <blockquote>
        It is amazing. I like it! also, may I know how did you implemented the
        global search? Any resources? Im planning to add it on our dashboard.
        Thanks - Reddit user
      </blockquote>
      <blockquote>
        Its really helpful. Thanks for sharing - Reddit user
      </blockquote>
      <h2>Type of sponsorship</h2>
      <ul>
        <li>
          <strong>Display Ad</strong>: Display your product name on top of{" "}
          <code>latest</code> page.
        </li>
        <li>
          <strong>Premium Listing</strong>: Get your product name on top of the
          list.
        </li>
      </ul>

      <h2>Target audience</h2>
      <p>
        Nextradar is providing fresh and high-quality content around Nextjs
        framework, React, and Vercel. Our audience is mainly Nextjs, and React
        developers. Visitors come from all around the world, with the majority
        from the United States, India, the United Kingdom and Germany.
      </p>

      <h2>Good fit ads</h2>
      <ul>
        <li>Reach Nextjs developers</li>
        <li>Reach React developers</li>
        <li>
          Reach decision makers: CTOs, tech leads, engineering managers...
        </li>
      </ul>

      <h2>Bad fit ads</h2>
      <ul>
        <li>Ads that are not related to Nextjs or React</li>
      </ul>

      <h2>Booking</h2>
      <p>
        To book an ad, please email me at{" "}
        <a href="mailto:sponsor@nextradar.dev">sponsor@nextradar.dev</a>
      </p>
    </section>
  )
}
