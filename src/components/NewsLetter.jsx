//import React from 'react'

const NewsLetter = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Exclusive: Subscribe Now to avail 20% DISCOUNT !!!
      </p>
      <p className="text-gray-500 mt-3"> Offer Valid for 24 HOURS ONLY !!!</p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center mx-auto my-6 border pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="abc@xyz.com"
          readOnly
        />
        <button type="submit" className="bg-black text-white px-10 py-4">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
