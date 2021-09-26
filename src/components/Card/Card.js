import React from "react";

const Card = ({ user }) => {
  return (
    <div className="mt-8 ">
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {user.map((usr) => (
          <div
            className=" text-gray-700 bg-blue-500 m-4 rounded-lg overflow-hidden shadow-lg"
            key={usr.id}
          >
            <div className="">
              <div className="w-full">
                <img
                  src={`${usr.image}`}
                  alt="A person"
                  className="md:w-72 w-full"
                />
              </div>
              <div className="flex flex-col items-center mt-4 lg:mt-0 p-2">
                <div className=" tracking-wide text-lg md:text-xs font-bold">
                  First Name : {usr.f_name}
                </div>
                <div className="tracking-wide text-lg md:text-xs font-bold ">
                  Last Name : {usr.l_name}
                </div>
                <a
                  href={`${usr.email}`}
                  className="block mt-1 text-lg md:text-xs leading-tight font-semi-bold text-gray-900 hover:underline"
                >
                  Email: {usr.email}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
