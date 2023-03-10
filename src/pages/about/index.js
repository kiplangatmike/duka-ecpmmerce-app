import pic from "../../../assests/images/about-pic.jpg";
import Image from "next/image";
import classes from "./index.module.css";

const About = () => {
  return (
    <div>
      <div className={classes.main}>
        <div className={classes.about1}>
          <h1 className=" text-left font-bold">
            At our Core, we are here for you
          </h1>

          <h5>
            we want you to enjoy the experience of shopping in a store at the
            comfort of your home
          </h5>
        </div>
        <div className={classes.about2}>
          <div>
            <Image src={pic} alt="" className={classes.img} />
          </div>
          <div className={classes.desc}>
            <h2>Always at your service</h2>
            <h5>A simple click of our button is our aim</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
