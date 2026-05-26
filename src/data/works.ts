export interface Work {
  slug: string;
  title: string;
  category: string; // "Video" | "Photography" | "Painting"
  subtitle: string;
  cover: string;
  description: string;
  shortDescription: string;
  images: string[]; // additional images for detail page
  video?: string; // optional video path
}

export const worksByCategory = {
  "Video": [
    {
      slug: "he-zhi-ke-yi",
      title: "Where to Perch",
      category: "Video",
      subtitle: "Experimental Film / Poetic Documentary",
      cover: "/images/works/he-zhi-ke-yi-cover.webp",
      description: "Taking the artist's own experience of frequent relocation as a point of departure, this work explores the loss of \"home\" and the search for security in an era of rapid mobility. Through poetic monologue, real mother-daughter conversations, and visual metaphors of paper boats and labyrinths, personal memory becomes a shared inquiry into displacement.",
      shortDescription: "An experimental film exploring the loss of home and the search for security in an era of dislocation.",
      images: [],
      video: "/videos/he-zhi-ke-yi.mp4",
    },
    {
      slug: "chu-jue",
      title: "Touch",
      category: "Video",
      subtitle: "Experimental Film",
      cover: "/images/works/chu-jue-cover.webp",
      description: "A sensory exercise on the theme of touch. From the fluffiness of cotton to the coldness of glass, from the texture of tree bark to the rhythm of a pulse—touch, I believe, is the first language, predating both vision and speech. It does not lie.\n\nIn this video, I try to capture those easily overlooked moments: the attachment and loss as water slips through fingers, skin wrinkled like mountain ranges after soaking, a water droplet rolling toward the corner of a lotus leaf, the soft yet insistent embrace of wind swelling fabric. The images do not merely repeat the words—they become another form of telling: subjective, fragmentary, at times contradictory.",
      shortDescription: "A sensory exercise on touch—the first language, predating vision and speech.",
      images: ["/images/works/chu-jue-1.webp", "/images/works/chu-jue-2.webp"],
      video: "/videos/chu-jue.mp4",
    },
    {
      slug: "can-you-hear-me",
      title: "Can You Hear Me",
      category: "Video",
      subtitle: "Experimental Film",
      cover: "/images/works/can-you-hear-me-cover.webp",
      description: "A surveillance camera awakens to emotion. In its eyes, the world is a music box stage: it pastes a heart beside a little girl, frames a smoking car with a red alert. It learns to love like humans do, and learns human unease. Until one day, in an empty rain-swept playground, it finds no target—yet still feels an impulse to express. This unclaimed affection becomes the sole proof of its existence. When surveillance is granted humanity, it transforms from an eye of power into an eye of companionship—from \"gazing\" toward \"caring.\"",
      shortDescription: "A surveillance camera learns to love and to feel unease—an eye of power becomes an eye of care.",
      images: ["/images/works/can-you-hear-me-2.webp"],
      video: "/videos/can-you-hear-me.mp4",
    },
    {
      slug: "xuan-er-wei-zhi",
      title: "Unarrived, Unremedied",
      category: "Video",
      subtitle: "Experimental Film",
      cover: "/images/works/xuan-er-wei-zhi-cover.webp",
      description: "The story unfolds in \"Shoucheng Era\"—a time when the future has been closed. All transformations have already landed. People no longer look up at the stars; instead, they preserve old fantasies as specimens. Here, the imagination of extraterrestrials is cultural heritage; longing for the future is a mental disorder requiring treatment. What this work truly seeks to touch is not the future, but the present. A future suspended, a longing untreated.",
      shortDescription: "In a world where the future has been closed, longing itself becomes a condition to cure.",
      images: [],
    }
  ],
  "Photography": [
    {
      slug: "xin-sheng-ji",
      title: "New Genesis",
      category: "Photography",
      subtitle: "Photography",
      cover: "/images/works/xin-sheng-ji-cover.webp",
      description: "Love turns in the eyes; I hear the clamor of life.",
      shortDescription: "Love turns in the eyes; I hear the clamor of life.",
      images: [
        "/images/works/xin-sheng-ji-1.webp",
        "/images/works/xin-sheng-ji-2.jpg",
        "/images/works/xin-sheng-ji-3.jpg",
        "/images/works/xin-sheng-ji-4.jpg",
        "/images/works/xin-sheng-ji-5.jpg",
        "/images/works/xin-sheng-ji-6.jpg",
        "/images/works/xin-sheng-ji-7.jpg",
        "/images/works/xin-sheng-ji-8.jpg",
        "/images/works/xin-sheng-ji-9.jpg",
        "/images/works/xin-sheng-ji-10.jpg",
        "/images/works/xin-sheng-ji-11.jpg",
        "/images/works/xin-sheng-ji-12.jpg",
        "/images/works/xin-sheng-ji-13.jpg",
        "/images/works/xin-sheng-ji-14.jpg",
        "/images/works/xin-sheng-ji-15.jpg",
      ]
    },
    {
      slug: "web-and-wyrd",
      title: "Web and Wyrd",
      category: "Photography",
      subtitle: "Photographic Series",
      cover: "/images/works/web-and-wyrd-01.webp",
      description: "Through three core mythological stories—Spider Grandmother weaving the world, Coyote weaving the stars, and the Valkyries weaving fate—this series presents how humanity has understood the world through the metaphor of weaving.",
      shortDescription: "How humanity has understood the world through the metaphor of weaving, told across three myths.",
      images: [
        "/images/works/web-and-wyrd-01.webp",
        "/images/works/web-and-wyrd-02.webp",
        "/images/works/web-and-wyrd-03.webp",
        "/images/works/web-and-wyrd-04.webp",
        "/images/works/web-and-wyrd-05.webp",
        "/images/works/web-and-wyrd-06.webp",
        "/images/works/web-and-wyrd-07.webp",
        "/images/works/web-and-wyrd-08.webp",
        "/images/works/web-and-wyrd-09.webp",
        "/images/works/web-and-wyrd-10.webp",
        "/images/works/web-and-wyrd-11.webp",
        "/images/works/web-and-wyrd-12.webp",
        "/images/works/web-and-wyrd-13.webp",
        "/images/works/web-and-wyrd-14.webp",
        "/images/works/web-and-wyrd-15.webp",
        "/images/works/web-and-wyrd-16.webp",
        "/images/works/web-and-wyrd-17.webp",
        "/images/works/web-and-wyrd-18.webp",
        "/images/works/web-and-wyrd-19.webp",
        "/images/works/web-and-wyrd-20.webp",
        "/images/works/web-and-wyrd-21.webp",
        "/images/works/web-and-wyrd-22.webp",
      ]
    },
    {
      slug: "fashion",
      title: "Fashion Photography",
      category: "Photography",
      subtitle: "Photography",
      cover: "/images/works/fashion-cover.jpg",
      description: "",
      shortDescription: "",
      images: [
        "/images/works/fashion-1.jpg",
        "/images/works/fashion-2.jpg",
        "/images/works/fashion-3.jpg",
        "/images/works/fashion-4.jpg",
        "/images/works/fashion-5.jpg",
        "/images/works/fashion-6.jpg",
        "/images/works/fashion-7.jpg",
        "/images/works/fashion-8.jpg",
        "/images/works/fashion-9.webp",
      ]
    },
    {
      slug: "experimental-photo",
      title: "Experimental Photography",
      category: "Photography",
      subtitle: "Photography",
      cover: "/images/works/experimental-photo-cover.webp",
      description: "",
      shortDescription: "",
      images: [
        "/images/works/experimental-photo-1.webp",
        "/images/works/experimental-photo-2.webp",
        "/images/works/experimental-photo-3.webp",
        "/images/works/experimental-photo-4.webp",
        "/images/works/experimental-photo-5.webp",
      ]
    },
    {
      slug: "iron-silver",
      title: "Iron-Silver Process",
      category: "Photography",
      subtitle: "Photography",
      cover: "/images/works/iron-silver-cover.webp",
      description: "",
      shortDescription: "",
      images: [
        "/images/works/iron-silver-1.webp",
        "/images/works/iron-silver-2.webp",
        "/images/works/iron-silver-3.webp",
      ]
    }
  ],
  "Painting": [
    {
      slug: "painting",
      title: "Painting",
      category: "Painting",
      subtitle: "Painting",
      cover: "/images/works/painting-1.jpg",
      description: "",
      shortDescription: "",
      images: [
        "/images/works/painting-1.jpg",
        "/images/works/painting-2.jpg",
      ]
    }
  ] as Work[]
};

// Flatten for lookup
export const works: Work[] = Object.values(worksByCategory).flat();
