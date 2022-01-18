import welcome from "../images/welcome.gif";

const Empty = () => {
  return (
    <>
      <div className="flex items-center justify-center pt-4">
        <div className="flex flex-col">
          <div>
            <div className="mx-10 bg-green-200">
              <p className="p-4 text-justify">
                A place where you can search for movies to know where they are
                streaming actually...!! Enter your search item and press the
                enter key to search for your item.
              </p>
            </div>
          </div>
          <div>
            <img src={welcome} alt="welcome gif" className="mx-auto h-96" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Empty;
