const SingleItem = ({ image, key, title, year, type, imdb, providers }) => {
  return (
    <div className="flex items-center justify-center pt-2" key={key}>
      <div className="p-10">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={image} alt="movie poster" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 flex items-center justify-center underline decoration-4">
              {title}
            </div>
            <div className="flex">
              <p className="text-gray-700 text-base flex-auto">Year : {year}</p>
              {imdb ? (
                Object.entries(imdb).map(([key, value]) => {
                  return (
                    <p className="text-gray-700 text-base flex-auto">
                      {key} : {value}
                    </p>
                  );
                })
              ) : (
                <div className=" text-red-700" role="alert">
                  <strong className="font-bold">Rating Not Found</strong>
                </div>
              )}
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center justify-center font-bold text-xl mb-2 underline decoration-2 pb-2">
                Provider's
              </div>
              {providers ? (
                Object.entries(providers).map(([key, value]) => {
                  return (
                    <a
                      type="button"
                      href={value}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      {key}
                    </a>
                  );
                })
              ) : (
                <div
                  className=" flex items-center justify-center text-red-700"
                  role="alert"
                >
                  <strong className="font-bold">Sorry Nothing Found..!!</strong>
                </div>
              )}
            </div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {type}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
