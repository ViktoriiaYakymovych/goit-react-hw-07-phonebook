import { Circles } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';

const Loader = () => {
    const isLoading = useSelector(selectIsLoading);

  return (
    <Circles
      height="80"
      width="80"
      color="#89CFF0"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={isLoading}
    />
  );
};

export default Loader;
