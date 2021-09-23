import React from "react";

const Card = ({ user }) => {
  return (
    <div className="container mt-5">
      {user.map((usr) => (
        <div className="sm-flex" key={usr.id}>
          <div className="flex-auto text-gray-600 text-center bg-gray-400 px-5 py-5 m-2 rounded">
            <div className="lg:flex lg:items-center">
              <div className="lg-flex-shrink-0">
                <img
                  src={`${usr.image}`}
                  alt="A person"
                  className="rounded-lg lg:w-64"
                />
              </div>
              <div className="flex flex-col items-start mt-4 lg:mt-0 lg:ml-6">
                <div className="uppercase tracking-wide text-md text-white">
                  First Name : {usr.f_name}
                </div>
                <div className="uppercase tracking-wide text-md text-white ">
                  Last Name : {usr.l_name}
                </div>
                <a
                  href={`${usr.email}`}
                  className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
                >
                  Email: {usr.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
