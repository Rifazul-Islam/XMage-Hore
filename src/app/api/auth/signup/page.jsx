"use client";

const SiginUpPage = () => {
  const handlerSignUp = async (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      image: e.target.image.value,
      type: e.target.type.value,
      password: e.target.password.value,
    };
    // console.log("checked", newUser);

    const res = await fetch("http://localhost:3000/api/auth/signup/new-user", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json",
      },
    });

    console.log(res);
    // resent();
  };

  return (
    <div>
      <div className="border w-96 mx-auto bg-gray-400 p-4 rounded-md">
        <h3 className="text-2xl font-bold text-center  text-white">Sigin UP</h3>
        <form onSubmit={handlerSignUp} className="mt-4 space-1-3">
          {/* for name input feild */}
          <label htmlFor="name "> Name</label>
          <input
            className="outline-none border-transparent p-3 w-full rounded-lg bg-slate-300 block "
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          {/* for email input feild */}
          <label htmlFor="email">Email</label>
          <input
            className="outline-none w-full border-transparent p-3 rounded-lg bg-slate-300 block "
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          {/* for email input feild */}
          <label htmlFor="password">Password</label>
          <input
            className="outline-none  border-transparent w-full p-3 rounded-lg bg-slate-300 block "
            type="password"
            name="password"
            placeholder="Your Password "
            required
          />

          {/* for Image  input feild */}
          <label htmlFor="password">Image</label>
          <input
            className="outline-none  border-transparent w-full p-3 rounded-lg bg-slate-300 block "
            type="text"
            name="image"
            placeholder="Your Image"
            required
          />

          {/* for Type input feild */}
          <label htmlFor="password">Type</label>
          <select
            name="type"
            placeholder="user type"
            className="outline-none  border-transparent w-full p-3 rounded-lg bg-slate-300 block "
          >
            <option value="admin">admin</option>
            <option value="modaretor">modaretor</option>
            <option value="amember">member</option>
          </select>

          <button className="rounded-lg w-full bg-[#E8F0FE] text-black py-2 my-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SiginUpPage;
