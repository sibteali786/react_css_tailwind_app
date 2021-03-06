import React from "react";

const Card = ({ user }) => {
  return (
    <div className="mt-8 ">
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {user.map((usr) => (
          <div
            className=" text-fontColor bg-secondary m-4 rounded-lg overflow-hidden shadow-lg tracking-widest card"
            key={usr.id}
          >
            <div className="w-full">
              <img src={`${usr.image}`} alt="A person" className="w-full" />
            </div>
            <div className="flex flex-col items-center mt-4 lg:mt-0 p-2">
              <div className=" tracking-widest text-lg md:text-base font-bold">
                First Name : {usr.f_name}
              </div>
              <div className="tracking-widest text-lg md:text-base font-bold ">
                Last Name : {usr.l_name}
              </div>
              <a
                href={`${usr.email}`}
                className="block mt-1 text-lg md:text-base leading-tight font-semi-bold text-fontColor hover:underline"
              >
                Email: {usr.email}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
