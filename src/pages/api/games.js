// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    count: 2,
    results: [
      {
        name: "Call of duty",
        rate: 50,
        platforms: [{ platform: { id: 1, slug: "slug", name: "MacOs" } }],
      },
      {
        name: "Red alerts",
        rate: 80,
        platforms: [{ platform: { id: 1, slug: "slug", name: "MacOs" } }],
      },
    ],
  });
}
