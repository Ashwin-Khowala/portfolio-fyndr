export interface BlogSection {
  type: 'p' | 'h2' | 'h3' | 'blockquote' | 'ul';
  content: string | string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  sections: BlogSection[];
}

export const blogs: BlogPost[] = [
  {
    slug: 'how-we-got-our-first-1000-users-without-spending-money',
    title: 'How We Got Our First 1,000 Users Without Spending a Single Rupee on Marketing',
    description: 'When launching a product, the most important question isn\'t how to build it-it\'s how to get people to use it. Here is the story of how we achieved our first 1,000 users on a ₹0 budget.',
    date: 'Jun 13, 2026',
    readTime: '4 min read',
    sections: [
      {
        type: 'p',
        content: 'When launching a product, the most important question isn\'t how to build it.'
      },
      {
        type: 'p',
        content: 'It\'s how to get people to use it.'
      },
      {
        type: 'p',
        content: 'Every founder dreams about launch day. You spend months building features, fixing bugs, and imagining what it would feel like when real users finally start signing up.'
      },
      {
        type: 'p',
        content: 'But eventually, reality hits.'
      },
      {
        type: 'p',
        content: 'You can build the best product in the world, but if nobody knows it exists, it doesn\'t matter.'
      },
      {
        type: 'p',
        content: 'A few months ago, we found ourselves in exactly that situation.'
      },
      {
        type: 'p',
        content: 'We had built an AI-powered social network for entrepreneurs and startup enthusiasts. The product was ready, the infrastructure was ready, and launch day was getting closer.'
      },
      {
        type: 'p',
        content: 'There was only one problem: we had no idea how we were going to get our first users.'
      },
      {
        type: 'h2',
        content: 'The Three Options'
      },
      {
        type: 'p',
        content: 'As we discussed our launch strategy, we realized there were only three realistic ways to get initial traction.'
      },
      {
        type: 'h3',
        content: '1. Have a Great Network'
      },
      {
        type: 'p',
        content: 'This is probably the easiest path. If you already have a large audience, thousands of followers, or influential connections, getting your first users becomes much easier.'
      },
      {
        type: 'p',
        content: 'One of my co-founders had a fairly strong network, which definitely helped. But even then, we knew it wouldn\'t be enough to get us to 1,000 users quickly.'
      },
      {
        type: 'h3',
        content: '2. Spend Money on Ads'
      },
      {
        type: 'p',
        content: 'The second option was paid marketing: Facebook ads, Instagram ads, Google ads.'
      },
      {
        type: 'p',
        content: 'The problem was simple. We were a startup, and every rupee mattered. The good news was that we weren\'t starting completely from zero. All of the founders were consistently posting content on social media, and we were also actively growing the main ClubFyndr pages. Over time, this gave us a decent organic reach on Instagram and YouTube.'
      },
      {
        type: 'p',
        content: 'People were already discovering us through our content, following our journey, and becoming curious about what we were building. But organic reach alone wasn\'t enough. We wanted to create a launch that could generate attention much faster than our existing growth rate. That\'s when we started looking at alternative ways to get distribution.'
      },
      {
        type: 'h3',
        content: '3. Guerrilla Marketing'
      },
      {
        type: 'p',
        content: 'That left us with the third option: guerrilla marketing. At that point, it wasn\'t even a concrete plan. It was just an idea. But the day before launch, everything changed.'
      },
      {
        type: 'h2',
        content: 'The Night Before Launch'
      },
      {
        type: 'p',
        content: 'Less than 24 hours before launch, we came up with what felt like a crazy marketing idea. It wasn\'t expensive, it wasn\'t complicated, but if it worked, it could put the product in front of thousands of potential users almost instantly.'
      },
      {
        type: 'p',
        content: 'We launched the campaign that same night. And then we waited.'
      },
      {
        type: 'p',
        content: 'I barely slept. Every founder knows that feeling. You\'ve spent months building something, and now you\'re just hours away from finding out whether anybody cares.'
      },
      {
        type: 'p',
        content: 'My team had a completely different concern. They weren\'t worried about getting users. They were worried about getting too many.'
      },
      {
        type: 'p',
        content: 'For weeks they kept asking me the same question: "What happens if the platform blows up on launch day?"'
      },
      {
        type: 'p',
        content: 'As the CTO, that was a terrifying question. Because if the marketing worked and the platform crashed, all that effort would be wasted.'
      },
      {
        type: 'h2',
        content: 'Launch Day'
      },
      {
        type: 'p',
        content: 'The app went live. Then something unexpected happened.'
      },
      {
        type: 'p',
        content: 'Users started joining immediately. Not slowly, not gradually. Immediately.'
      },
      {
        type: 'p',
        content: 'Within the first hour, more than 200 users had joined the platform. Within 24 hours, we crossed 600 users. Within the first month, we crossed 1,000 users.'
      },
      {
        type: 'p',
        content: 'And throughout the entire process, we spent exactly ₹0 on marketing. No ad campaigns, no influencer deals, no paid promotions. Nothing.'
      },
      {
        type: 'h2',
        content: 'What Actually Worked'
      },
      {
        type: 'p',
        content: 'Looking back, it wasn\'t one thing that got us our first 1,000 users. It was a combination of factors.'
      },
      {
        type: 'p',
        content: 'The months of content creation by the founders. The audience we had slowly built on Instagram and YouTube. The community that was already following our journey. And finally, the guerrilla marketing campaign that amplified everything on launch day.'
      },
      {
        type: 'p',
        content: 'Many founders think growth comes from a single viral moment. In reality, the viral moment usually works because of months of preparation beforehand.'
      },
      {
        type: 'p',
        content: 'Our launch wasn\'t successful because of one campaign. It was successful because we had already spent months building attention before we ever asked people to sign up.'
      },
      {
        type: 'h2',
        content: 'Product Hunt'
      },
      {
        type: 'p',
        content: 'The momentum didn\'t stop there. Our launch helped us reach #21 on Product Hunt.'
      },
      {
        type: 'p',
        content: 'For a small startup with a limited budget, that felt unreal. The ranking itself wasn\'t the important part. What mattered was validation. People we had never met were signing up, exploring the platform, and sharing feedback. That was the moment when the project started feeling real.'
      },
      {
        type: 'h2',
        content: 'Looking Back'
      },
      {
        type: 'p',
        content: 'If I had to summarize the experience in one sentence, it would be this: Your first 1,000 users are usually earned through creativity, not money.'
      },
      {
        type: 'p',
        content: 'Most early-stage founders assume they need a large budget. In reality, what they often need is a unique way to get attention. Money can amplify distribution, but distribution itself doesn\'t have to cost money.'
      },
      {
        type: 'p',
        content: 'For us, a simple guerrilla marketing campaign was enough to create the initial momentum we needed. And that momentum was worth far more than any ad campaign we could have afforded at the time.'
      },
      {
        type: 'p',
        content: 'In a future post, I\'ll break down the exact guerrilla marketing strategy we used, what worked, what failed, and whether I\'d do it again today.'
      }
    ]
  }
];
