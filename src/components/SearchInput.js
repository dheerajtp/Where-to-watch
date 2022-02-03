import { useToasts } from "react-toast-notifications";

const SearchInput = ({ setSearchItem, searchItem, setKeyword }) => {
  const { addToast } = useToasts();
  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };
  const formHandler = async (e) => {
    e.preventDefault();
    if (searchItem.length === 0) {
      addToast("Please Enter Your Search Query...!", { appearance: "warning" });
    } else {
      let newkeyword = await searchItem.replace(/ /g, "%20");
      setKeyword(newkeyword);
    }
  };

  return (
    <form onSubmit={formHandler}>
      <div className="flex items-center justify-center">
        <div className="flex rounded">
          <input
            type="text"
            name="searchItem"
            value={searchItem}
            onChange={handleChange}
            className="px-4 py-2 w-80 outline-0 bg-orange-100 border-l-4 border-orange-500"
            placeholder="Search your movie here.."
            autoComplete="off"
          />
        </div>
      </div>
    </form>
  );
};

export default SearchInput;
