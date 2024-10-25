const blogDetails = ({ params }) => {
  const items = blogs?.find((item) => item.id === Number(params?.id));
  console.log("checked");
  return (
    <div>
      <p> {items?.title} </p>
    </div>
  );
};

const blogs = [
  {
    id: 1,
    title: "The Joy of Traveling Alone",
    description:
      "Discover the beauty of exploring the world on your own terms and finding solace in solitude.",
    image: "https://example.com/images/traveling-alone.jpg",
  },
  {
    id: 2,
    title: "10 Tips for Effective Coding",
    description:
      "Enhance your programming skills with these ten practical tips for becoming a better coder.",
    image: "https://example.com/images/coding-tips.jpg",
  },
  {
    id: 3,
    title: "The Benefits of Mindfulness",
    description:
      "Learn how mindfulness practices can improve your mental health and overall well-being.",
    image: "https://example.com/images/mindfulness.jpg",
  },
  {
    id: 4,
    title: "Top 5 Destinations for 2024",
    description:
      "Explore the top travel destinations to visit in 2024 and make unforgettable memories.",
    image: "https://example.com/images/destinations-2024.jpg",
  },
  {
    id: 5,
    title: "Mastering React for Beginners",
    description:
      "A comprehensive guide for beginners to kickstart their journey with React.",
    image: "https://example.com/images/react-beginners.jpg",
  },
  {
    id: 6,
    title: "Healthy Eating Made Easy",
    description:
      "Tips and recipes for adopting a healthier lifestyle through better nutrition.",
    image: "https://example.com/images/healthy-eating.jpg",
  },
  {
    id: 7,
    title: "Understanding JavaScript Closures",
    description:
      "Dive deep into JavaScript closures and their practical applications in coding.",
    image: "https://example.com/images/javascript-closures.jpg",
  },
  {
    id: 8,
    title: "The Future of Web Development",
    description:
      "Insights into emerging trends and technologies that will shape the future of web development.",
    image: "https://example.com/images/future-web-development.jpg",
  },
  {
    id: 9,
    title: "Tips for Remote Work Success",
    description:
      "Essential strategies to thrive in a remote work environment and maintain productivity.",
    image: "https://example.com/images/remote-work.jpg",
  },
  {
    id: 10,
    title: "Exploring the World of AI",
    description:
      "An introduction to artificial intelligence and its impact on various industries.",
    image: "https://example.com/images/ai-exploration.jpg",
  },
];

export default blogDetails;
