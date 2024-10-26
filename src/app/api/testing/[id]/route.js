export async function PATCH(request, { params }) {
  //   console.log(params.id);
  const body = await request.json();
  const index = blogs.findIndex((c) => c.id === parseInt(params.id));

  blogs[index] = {
    title: body.title,
    id: body.id,
  };

  return Response.json({
    message: "Succfully Data Get",
    blogs,
  });
}

// Delete API New Syste

export async function DELETE(request, { params }) {
  // console.log("params Check", params);
  const newBlogs = blogs.filter((d) => d.id !== parseInt(params.id));
  console.log("checked move", params);
  return Response.json({
    message: "Succfully Data Get",
    newBlogs,
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
