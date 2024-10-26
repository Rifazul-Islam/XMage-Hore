import { headers } from "next/headers";

// Get Api Create A Funciton
export async function GET() {
  return Response.json(blogs, {
    headers: {
      "Set-Cookie": "theme= light",
    },
  });
}

// Post  Api Create A Funciton
export async function POST(request) {
  const newcomments = await request.json();
  blogs.push({
    id: blogs.length + 1,
    message: newcomments.title,
  });

  return Response.json({
    message: "new Comment Addd",
    blogs,
  });
}

const blogs = [
  {
    id: 1,
    title: "The Joy of Traveling Alone",
  },
  {
    id: 2,
    title: "10 Tips for Effective Coding",
  },
  {
    id: 3,
    title: "The Benefits of Mindfulness",
  },
  {
    id: 4,
    title: "Top 5 Destinations for 2024",
  },
];
