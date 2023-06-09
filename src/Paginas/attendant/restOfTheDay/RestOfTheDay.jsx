import { React } from 'react';
import NewOrder from '../../../Components/newOrder/NewOrder';

const RestOfTheDay = () => {

  return (
    <>
      <NewOrder page={'RestOfTheDay'} navigate={'/breakfast'}/>
    </>
  )
}

export default RestOfTheDay;