export interface Work {
  slug: string;
  title: string;
  category: string; // "影像" | "摄影" | "绘画"
  subtitle: string;
  cover: string;
  description: string;
  shortDescription: string;
  images: string[]; // additional images for detail page
  video?: string; // optional video path
}

export const worksByCategory = {
  "影像": [
    {
      slug: "he-zhi-ke-yi",
      title: "何枝可依",
      category: "影像",
      subtitle: "实验影像 / 诗纪录片",
      cover: "/images/works/he-zhi-ke-yi-cover.png",
      description: "以个人频繁搬家的成长经历为起点，通过诗意的独白、真实的母女对话以及纸船、迷宫等视觉隐喻，探讨在高速流动的当下，个体对「家」的迷失与对安全感的追问。",
      shortDescription: "以个人频繁搬家的成长经历为起点，探讨个体对「家」的迷失与对安全感的追问。",
      images: []
    },
    {
      slug: "chu-jue",
      title: "触觉",
      category: "影像",
      subtitle: "实验影像",
      cover: "/images/works/chu-jue-cover.png",
      description: "这是一次关于「触碰」的五感练习。从棉花的蓬松到玻璃的冷静，从树干的纹路到脉搏的跳动——我相信，触碰是先于视觉、先于语言的第一种语言，它不会说谎。\n\n在这段影像里，我试图捕捉那些容易被忽略的瞬间：水从指缝流走时的依恋与流失，皮肤泡水后如山脉般的褶皱，荷叶上滚向画面一角的水滴，以及风鼓动衣服时那种轻柔又强硬的包裹感。视频不完全重复文字，而是让影像成为另一种诉说——主观的、片段的、有时甚至矛盾的。",
      shortDescription: "一次关于「触碰」的五感练习——触碰是先于视觉、先于语言的第一种语言。",
      images: ["/images/works/chu-jue-1.png", "/images/works/chu-jue-2.png"],
      video: "",
    },
    {
      slug: "can-you-hear-me",
      title: "你能看见我了吗",
      category: "影像",
      subtitle: "实验影像",
      cover: "/images/works/can-you-hear-me-cover.png",
      description: "以一枚萌生情感的摄像头为主角。在它眼里世界是八音盒的舞台：在小女孩旁边贴上一枚爱心，为冒烟汽车框起红色警报。它学着人类去爱，也学着人类不安。直到在一个空无一人的雨中乐园，它找不到任何目标，却依然感受到一股想要表达的冲动。这无人接收的喜爱，却成了它存在的唯一证明。当监控被赋予人性，它便从权力的眼睛转变为陪伴的眼睛，从「凝视」走向「关怀」。",
      shortDescription: "一枚萌生情感的摄像头，学着人类去爱，也学着人类不安。",
      images: ["/images/works/can-you-hear-me-2.png"],
      video: "",
    },
    {
      slug: "xuan-er-wei-zhi",
      title: "悬而未至 悬而未治",
      category: "影像",
      subtitle: "实验影像",
      cover: "/images/works/xuan-er-wei-zhi-cover.png",
      description: "故事发生在「守成纪」——一个未来已被关闭的时代。一切变革均已落地，人们不再仰望星空，转而将旧日幻想制成标本。在那里，对外星人的想象是文化遗产，对未来的渴望是一种需要治疗的精神失调。这部作品真正想触碰的，不是未来，而是现在。悬而未至的未来，悬而未治的渴望。",
      shortDescription: "故事发生在「守成纪」——一个未来已被关闭的时代。悬而未至的未来，悬而未治的渴望。",
      images: []
    }
  ],
  "摄影": [
    {
      slug: "xin-sheng-ji",
      title: "新生纪",
      category: "摄影",
      subtitle: "摄影",
      cover: "/images/works/xin-sheng-ji-cover.png",
      description: "爱在眼眸流转，我听见生的喧嚣。",
      shortDescription: "爱在眼眸流转，我听见生的喧嚣。",
      images: ["/images/works/xin-sheng-ji-1.png"]
    },
    {
      slug: "web-and-wyrd",
      title: "Web and Wyrd",
      category: "摄影",
      subtitle: "影集",
      cover: "/images/works/web-and-wyrd-cover.jpg",
      description: "通过三个核心神话故事——蜘蛛祖母编织世界、郊狼柯帝编织星辰、女武神编织命运——呈现人类如何用「编织」的意象理解世界。",
      shortDescription: "通过三个神话故事，呈现人类如何用「编织」的意象理解世界。",
      images: [
        "/images/works/web-and-wyrd-1.jpg",
        "/images/works/web-and-wyrd-2.jpg",
        "/images/works/web-and-wyrd-3.jpg",
        "/images/works/web-and-wyrd-4.jpg",
        "/images/works/web-and-wyrd-5.jpg",
        "/images/works/web-and-wyrd-6.jpg",
        "/images/works/web-and-wyrd-7.jpg"
      ]
    },
    {
      slug: "fashion",
      title: "时尚摄影",
      category: "摄影",
      subtitle: "摄影",
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
        "/images/works/fashion-9.png"
      ]
    },
    {
      slug: "experimental-photo",
      title: "实验摄影",
      category: "摄影",
      subtitle: "摄影",
      cover: "/images/works/experimental-photo-cover.png",
      description: "",
      shortDescription: "",
      images: [
        "/images/works/experimental-photo-1.png",
        "/images/works/experimental-photo-2.png",
        "/images/works/experimental-photo-3.png",
        "/images/works/experimental-photo-4.png",
        "/images/works/experimental-photo-5.png"
      ]
    },
    {
      slug: "iron-silver",
      title: "铁银试剂",
      category: "摄影",
      subtitle: "摄影",
      cover: "/images/works/iron-silver-cover.png",
      description: "",
      shortDescription: "",
      images: [
        "/images/works/iron-silver-1.png",
        "/images/works/iron-silver-2.png",
        "/images/works/iron-silver-3.png"
      ]
    }
  ],
  "绘画": [] as Work[]
};

// Flatten for lookup
export const works: Work[] = Object.values(worksByCategory).flat();
