import { React } from 'react';
import NewOrder from '../../../Components/newOrder/NewOrder';

const Breakfast = () => {

  return (
    <>
      <NewOrder page={'Breakfast'} navigate={'/resto-do-dia'}/>
    </>
  )
}

export default Breakfast;