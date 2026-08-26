const CHANNEL_ID = "UC0M6w-NBNb29i0nEPpr0qag";

module.exports = async (req, res) => {
  try {
    const r = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${process.env.YOUTUBE_API_KEY}`
    );
    const data = await r.json();
    const stats = data.items && data.items[0] && data.items[0].statistics;
    if (!stats) throw new Error("no_stats");

    res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=3600");
    res.status(200).json({
      ok: true,
      subscribers: Number(stats.subscriberCount),
      videos: Number(stats.videoCount),
      views: Number(stats.viewCount),
    });
  } catch (err) {
    res.status(502).json({ ok: false, error: "fetch_failed" });
  }
};
