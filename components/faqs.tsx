const faqs = [
  {
    question: "What NextRadar is not?",
    answer:
      "It is not an alterantive to YT or search engines, but a place to navigate the Next.js ecosystem.",
  },
  {
    question: "How do I evaluate a resource/tool?",
    answer:
      "When evaluating a resource, I consider several factors such as the author's credibility, its popularity, and my personal experience from over two years of working with Next.js.",
  },
  {
    question: "It's free, who pay for that?",
    answer:
      "No one, it doesn't take much time to maintain at the moment, I may add sponsored resources in the future with clear.",
  },
]

//======================================
export const Faqs = () => {
  return (
    <section className="mx-auto max-w-2xl py-8 md:pb-24 px-2">
      <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 font-bold tracking-tighter text-center">
        Some questions you might have!
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-dashed rounded border-zinc-400 dark:border-zinc-700 p-4"
          >
            <h3 className="font-semibold text-lg">{faq.question}</h3>
            <p className="dark:text-zinc-500">{faq.answer}</p>
          </div>
        ))}
      </div>
      <p className="text-center max-w-lg mx-auto dark:text-zinc-400 pt-6">
        Haven{"'"}t I answered all your questions? Feel free to reach out on{" "}
        <a href="https://twitter.com/alihusnain_20" className="hover:underline">
          𝕏
        </a>{" "}
        I will be glad to response.
      </p>
    </section>
  )
}
