const DOMAINS = [
  "sportingbeyond.co",
  "sportingbeyond.org",
  "beyondsporting.com",
];

const SOCIALS = [
  {
    name: "Email",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=aaveggupta.work@gmail.com&su=Domain%20Purchase%20Inquiry&body=Hi%20Aaveg%2C%0A%0AI%27m%20interested%20in%20purchasing%20one%20of%20the%20domains.%20Please%20let%20me%20know%20more%20details.%0A%0AThanks!",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/iamaaveg/",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/aaveggupta/",
  },
  {
    name: "X",
    link: "https://x.com/its_Aaveg",
  },
];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center sm:text-left">
        <h1 className="text-4xl font-bold">Domain Names for Sale</h1>
        <p className="text-lg">
          Interested in purchasing a unique sports-related domain? Check out the
          options below and reach out if youre interested!
        </p>

        <ul className="list-disc list-inside">
          {DOMAINS.map((domainName, index) => (
            <li key={index}>
              <code>{domainName}</code>
            </li>
          ))}
        </ul>

        <p className="text-sm text-gray-500">
          If you’re interested in any of these domains, feel free to contact me
          via email or social media below!
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          {SOCIALS.map((handle, index) => (
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href={handle.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              Contact via {handle.name}
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
