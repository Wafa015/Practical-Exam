import Carousal from './Carousal';
import Statistics from './Statistics';

import Contact from './Contact';

export default function Welcome() {
  return (
    <div>
      <Carousal />
      <div>
        <Statistics />
        <Contact />
      </div>
    </div>
  );
}
