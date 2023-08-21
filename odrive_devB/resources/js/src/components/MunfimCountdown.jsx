import { useCountdown } from "../useCountdown";

const MunfimCountdown = () => {
  const [days, hours, minutes, seconds] = useCountdown(
    `${new Date().getMonth() + 1} ${
      new Date().getDate() + 20
    } , ${new Date().getFullYear()} 00:00:00`
  );

  return (
    <ul className="count-down mt-35">
      <li>
        <span id="days">{/*days > 9 ? days : `0${days}`*/} 01</span>J
      </li>
      <li>
        <span id="hours">{/*hours > 9 ? hours : `0${hours}`*/}02</span>Hours
      </li>
      <li>
        <span id="minutes">{/*minutes > 9 ? minutes : `0${minutes}`*/}23</span>Minutes
      </li>
      <li>
        <span id="seconds">{/*seconds > 9 ? seconds : `0${seconds}`*/}40</span>Seconds
      </li>
    </ul>
  );
};
export default MunfimCountdown;
