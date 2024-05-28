import { InputAdornment, TextField } from "@mui/material";

import { CiSearch } from "react-icons/ci";

interface ISearch {
  onSearch: (value: string) => void;
}

export const InputSearch = ({ onSearch }: ISearch) => {
  return (
    <>
      <div className="mt-5 flex justify-center">
        <TextField
          className="w-full md:w-[60rem] max-w-[60rem] "
          id="standard-search"
          type="search"
          variant="outlined"
          color="warning"
          placeholder="Insira um clã"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" className="text-2xl">
                <CiSearch />
              </InputAdornment>
            ),
          }}
          onChange={(event) => onSearch(event.target.value)}
        />
      </div>
    </>
  );
};
