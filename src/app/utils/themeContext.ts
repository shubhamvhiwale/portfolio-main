import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "@/app/lib/redux/features/themeSlice";

const useThemeContext = () => {
  //   const theme = useSelector((state: any) => state.theme);
  //   console.log("theme-from-context : ", theme);

  const dispatch = useDispatch();

  const updateTheme = (theme: any) => {
    // debugger;
    dispatch(setTheme(theme)); // Use the imported action explicitly
  };

  return {
    theme: useSelector((state: any) => state.theme),
    setT: updateTheme, // Expose the renamed function
  };
};

export default useThemeContext;
