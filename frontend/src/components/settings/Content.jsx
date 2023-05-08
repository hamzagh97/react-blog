const Content = () => {
  return (
    <div className="w-full rounded-lg bg-white p-5">
      <h1 className="font-poppins text-2xl font-bold">User</h1>
      <form action="" className="flex flex-col">
        <div className="my-4">
          <label className="block" htmlFor="name">
            Name
          </label>
          <input
            className="mt-2 w-full rounded-md border border-gray-300 p-2 text-sm font-black"
            type="text"
            placeholder="Hamza Ghazouani"
          />
        </div>
        <div className="my-4">
          <label className="block" htmlFor="name">
            Email
          </label>
          <input
            className="mt-2 w-full rounded-md border border-gray-300 p-2 text-sm font-black"
            type="text"
            placeholder="hamzagh168@gmail.com"
          />
        </div>
        <div className="my-4 space-x-3">
          <input type="checkbox" className="rounded" />
          <span>Display email on profile</span>
        </div>
        <div className="my-4">
          <label className="block" htmlFor="name">
            Username
          </label>
          <input
            className="mt-2 w-full rounded-md border border-gray-300 p-2 text-sm font-black"
            type="text"
            placeholder="Hamzagh97"
          />
        </div>
      </form>
    </div>
  );
};

export default Content;
